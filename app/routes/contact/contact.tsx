import { useRef } from 'react';
import Button from '~/components/button/button';
import { DecoderText } from '~/components/decoder-text/decoder-text';
import { Divider } from '~/components/divider/divider';
import { Heading } from '~/components/heading/heading';
import { Icon } from '~/components/icon/icon';
import { Input } from '~/components/input/input';
import { Section } from '~/components/section/section';
import { Text } from '~/components/text/text';
import { tokens } from '~/components/theme-provider/theme';
import { Transition } from '~/components/transition/transition';
import { Turnstile } from '~/components/turnstile/turnstile';
import { verifyTurnstileToken } from '~/utils/turnstile';
import { useFormInput } from 'app/hooks/useFormInput'; 
import { baseMeta } from '../../utils/meta';
import { cssProps, msToNum, numToMs } from 'app/utils/style';
import { Form, useActionData, useNavigation } from '@remix-run/react';
import { json } from '@remix-run/cloudflare';
import styles from './contact.module.css';

export const meta = () => {
  return baseMeta({
    title: 'Contact',
    description:
      'Send me a message if you’re interested in discussing a project or if you just want to say hi',
  });
};

const MAX_NAME_LENGTH = 128;
const MAX_EMAIL_LENGTH = 512;
const MAX_MESSAGE_LENGTH = 4096;
const MIN_MESSAGE_LENGTH = 20;
const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

interface ActionData {
    success?: boolean; 
    errors?: {
    name?: string;
    email?: string;
    message?: string;
  };
}

export async function action ({ request, context }: { request: Request, context: any }) {
  const formData = await request.formData();
  const isBot = formData.get('phone') as string;
  const name = formData.get('name') as string;
  const email = formData.get('email') as string;
  const message = formData.get('message') as string;
  const errors: { name?: string; email?: string; message?: string } = {};

  // Return without sending email if bot
  if (isBot) return json({ success: true }, { status: 200 });

  // Server-side input validation
  if (!name) {
    errors.name = 'Please enter your name.';
  }

  if (!email || !EMAIL_PATTERN.test(email)) {
    errors.email = 'Please enter a valid email address.';
  }

  if (!message) {
    errors.message = 'Please enter a message.';
  }

  if (message && message.length < MIN_MESSAGE_LENGTH) {
    errors.message = `Message must be at least ${MIN_MESSAGE_LENGTH} characters.`;
  }

  if (name && name.length > MAX_NAME_LENGTH) {
    errors.name = `Name must be shorter than ${MAX_NAME_LENGTH} characters.`;
  }

  if (email && email.length > MAX_EMAIL_LENGTH) {
    errors.email = `Email address must be shorter than ${MAX_EMAIL_LENGTH} characters.`;
  }

  if (message && message.length > MAX_MESSAGE_LENGTH) {
    errors.message = `Message must be shorter than ${MAX_MESSAGE_LENGTH} characters.`;
  }

  if (Object.keys(errors).length > 0) {
    return json<ActionData>({ errors }, { status: 400 });
  }

  // Verify the Turnstile token
  try {
    const token = formData.get('cf-turnstile-response') as string;
    const verificationResult = await verifyTurnstileToken(token);

    if ('status' in verificationResult) {
      return json<ActionData>(
        { errors: { message: verificationResult.message } },
        { status: verificationResult.status }
      );
    }

    if (!verificationResult.success) {
      return json<ActionData>(
        { errors: { message: 'CAPTCHA verification failed. Please try again.' } },
        { status: 400 }
      );
    }

    const relayUrl = context.cloudflare.env.CONTACT_RELAY_URL;
    if (!relayUrl) {
      console.error('CONTACT_RELAY_URL is not configured.');
      return json<ActionData>(
        { errors: { message: 'Contact service is unavailable. Please try again later.' } },
        { status: 200 }
      );
    }

    const relayHeaders: Record<string, string> = {
      'Content-Type': 'application/json',
    };
    if (context.cloudflare.env.CONTACT_RELAY_TOKEN) {
      relayHeaders['Authorization'] = `Bearer ${context.cloudflare.env.CONTACT_RELAY_TOKEN}`;
    }

    const response = await fetch(relayUrl, {
      method: 'POST',
      headers: relayHeaders,
      body: JSON.stringify({
        name,
        email,
        message,
      }),
    });

    if (!response.ok) {
      const relayBody = await response.text().catch(() => '');
      console.error('Relay error:', response.status, relayBody);
      return json<ActionData>(
        { errors: { message: 'Failed to send message. Please try again later.' } },
        { status: 200 }
      );
    }

    return json({ success: true }, { status: 200 });

  } catch (error) {
    console.error('Error sending message:', error);
    return json<ActionData>(
      { errors: { message: 'An unexpected error occurred.' } },
      { status: 200 }
    );
  }
};



export const Contact = () => {
  const errorRef = useRef<HTMLDivElement>(null);
  const name = useFormInput('');
  const email = useFormInput('');
  const message = useFormInput('');
  const phone = useFormInput('');
  const initDelay = tokens.base.durationS;
  const actionData = useActionData<ActionData>();
  const { state } = useNavigation();
  const sending = state === 'submitting';
  
  return (
    <Section data-theme="dark" className={styles.contact}>      
      <Transition unmount in={!actionData?.success} timeout={1600}>
        {({ status, nodeRef }: { status: string; nodeRef: React.RefObject<HTMLFormElement> }) => (          
          <Form
            unstable_viewTransition
            className={styles.form}
            method="post"
            ref={nodeRef}
          >
            <Heading
              className={styles.title}
              data-status={status}
              level={3}
              as="h2"
              style={getDelay(tokens.base.durationXS, initDelay, 0.3)}
            >
              <DecoderText text="Send a message" start={status !== 'exited'} delay={300} />
            </Heading>
            <Divider
              collapsed={status !== 'entered'}
              collapseDelay={0}                         
              className={styles.divider}
              data-status={status}
              style={getDelay(tokens.base.durationXS, initDelay, 0.4)}
            />
            {/* Honeypot for bots */}
            <Input
            id="phone"
            required={false}
            className={styles.botkiller}
            label="Phone"
            name="phone"
            maxLength={MAX_EMAIL_LENGTH}
            multiline={false}
            style={{}}
            autoComplete="phone"
            type="phone"
            {...phone}
            />        
            <Input
              id="name"
              required
              className={styles.input}
              data-status={status}
              style={getDelay(tokens.base.durationXS, initDelay)}
              autoComplete="name"
              label="Your name"
              type="text"
              name="name"
              maxLength={MAX_NAME_LENGTH}
              multiline={false}
              {...name}
            />
            <Input
              id="email"
              required
              className={styles.input}
              data-status={status}
              style={getDelay(tokens.base.durationS, initDelay)}
              autoComplete="email"
              label="Your email"
              type="email"
              name="email"
              maxLength={MAX_EMAIL_LENGTH}
              multiline={false}
              {...email}
            />
            <Input
              id="message"
              required
              multiline
              className={styles.input}
              data-status={status}
              style={getDelay(tokens.base.durationM, initDelay)}
              autoComplete="off"
              type="textarea"
              label="Message"
              name="message"
              maxLength={MAX_MESSAGE_LENGTH}
              {...message}
            />
            <Transition
              unmount
              in={!sending && actionData?.errors}
              timeout={msToNum(tokens.base.durationM)}
            >
              {({ status: errorStatus, nodeRef }: { status: string; nodeRef: React.RefObject<HTMLDivElement> }) => (
                <div
                  className={styles.formError}
                  ref={nodeRef}
                  data-status={errorStatus}
                  style={cssProps({
                    height: errorStatus ? errorRef.current?.offsetHeight ?? 0 : 0,
                  })}
                >
                  <div className={styles.formErrorContent} ref={errorRef}>
                    <div className={styles.formErrorMessage}>
                      <Icon className={styles.formErrorIcon} icon="error" />
                      {actionData?.errors?.name}
                      {actionData?.errors?.email}
                      {actionData?.errors?.message}                      
                    </div>
                  </div>
                </div>
              )}
            </Transition>
            {/* Turnstile widget, sets WidgetId */}
            <Turnstile
            className={styles.turnstile}                        
            data-status={status}            
            style={getDelay(tokens.base.durationM, initDelay)}                                                
            />                          
            <Button
              className={styles.button}
              data-status={status}
              data-sending={sending}
              style={getDelay(tokens.base.durationL, initDelay)}
              disabled={sending}
              loading={sending}
              loadingText="Sending..."
              icon="send"
              type="submit"
            >
              Send message
            </Button>                       
          </Form>          
        )}
      </Transition>
      <Transition unmount in={actionData?.success}>
        {({ status, nodeRef }: { status: string; nodeRef: React.RefObject<HTMLDivElement> }) => (
          <div className={styles.complete} aria-live="polite" ref={nodeRef}>
            <Heading
              level={3}
              as="h3"
              className={styles.completeTitle}
              data-status={status}
            >
              Message Sent
            </Heading>
            <Text
              size="l"
              as="p"
              className={styles.completeText}
              data-status={status}
              style={getDelay(tokens.base.durationXS)}
            >
              I’ll get back to you within a couple days, sit tight
            </Text>            
            <Button
              secondary
              iconHoverShift
              className={styles.completeButton}
              data-status={status}
              style={getDelay(tokens.base.durationM)}
              href="/"
              icon="chevron-right"
            >
              Back to homepage
            </Button>
          </div>          
        )}
      </Transition>      
    </Section>
  );
};

interface GetDelayParams {
  delayMs: string;
  offset?: string;
  multiplier?: number;
}

function getDelay(delayMs: string, offset: string = numToMs(0), multiplier: number = 1): React.CSSProperties {
  const numDelay = msToNum(delayMs) * multiplier;
  return cssProps({ delay: numToMs(parseFloat((msToNum(offset) + numDelay).toFixed(0))) });
}

