import React, { useState, useRef } from 'react';
import { Button, DecoderText, Divider, Heading, Icon, Input, Section, Text,
  tokens, Transition } from 'app/components/Components';
  import { useFormInput } from 'app/hooks/useFormInput'; 
import { baseMeta } from '../../utils/meta';
import { cssProps, msToNum, numToMs } from 'app/utils/style';
import { Form, useActionData, useNavigation } from '@remix-run/react';
import { json, ActionFunction } from '@remix-run/cloudflare';
import styles from './contact.module.css';

export const meta = () => {
  return baseMeta({
    title: 'Contact',
    description:
      'Send me a message if you’re interested in discussing a project or if you just want to say hi',
  });
};

const MAX_EMAIL_LENGTH = 512;
const MAX_MESSAGE_LENGTH = 4096;
const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export const action: ActionFunction = async ({ request }) => {
  try {
  console.log('Action function invoked');
  const formData = await request.formData();
  const name = formData.get('name') as string;
  const email = formData.get('email') as string;
  const message = formData.get('message') as string;
  const isBot = String(formData.get('botName'));
  const errors: { name?: string; email?: string; message?: string } = {};

  // Access environment variables securely
    const SENDLAYER_API_KEY = process.env.SENDLAYER_API_KEY;
    const SENDLAYER_SENDER_EMAIL = process.env.SENDLAYER_SENDER_EMAIL;

    console.log('SENDLAYER_API_KEY:', SENDLAYER_API_KEY);
    console.log('SENDLAYER_SENDER_EMAIL:', SENDLAYER_SENDER_EMAIL);

    if (!SENDLAYER_API_KEY || !SENDLAYER_SENDER_EMAIL) {
      console.error('SendLayer API key or sender email is not defined.');
      return json({ error: 'Server configuration error.' }, { status: 500 });
    }

  // Basic validation
  if (!name || !email || !message) {
    return json({ error: 'All fields are required.' }, { status: 400 });
  }
// SendLayer API endpoint
  const sendLayerEndpoint = 'https://console.sendlayer.com/api/v1/email'; // Update based on documentation

  // Return without sending if a bot trips the honeypot
  if (isBot) return json({ success: true });

  // Handle input validation on the server
  if (!name) {
    errors.name = 'Please enter your name.';
  }
  if (!email || !EMAIL_PATTERN.test(email)) {
    errors.email = 'Please enter a valid email address.';
  }

  if (!message) {
    errors.message = 'Please enter a message.';
  }

  if (email.length > MAX_EMAIL_LENGTH) {
    errors.email = `Email address must be shorter than ${MAX_EMAIL_LENGTH} characters.`;
  }

  if (message.length > MAX_MESSAGE_LENGTH) {
    errors.message = `Message must be shorter than ${MAX_MESSAGE_LENGTH} characters.`;
  }

  if (Object.keys(errors).length > 0) {
    return json({ errors });
  } 



    const response = await fetch(sendLayerEndpoint, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${SENDLAYER_API_KEY}`,
      },
      body: JSON.stringify({
        "from": {
          "name": "StephenJLu.com",
          "email": SENDLAYER_SENDER_EMAIL
        },
        "to": [
          {
            "name": "Stephen J. Lu",
            "email": "Stephen@StephenJLu.com"
          }
        ],
        "subject": "New Contact Form Submission",
        "ContentType": "HTML",
        "HTMLContent": `<html><body>
          <p>You have a new contact form submission:</p>
          <p><strong>Name:</strong> ${name}</p>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Message:</strong><br/>${message}</p>
        </body></html>`,
        "PlainContent": `You have a new contact form submission:
        
Name: ${name}
Email: ${email}
Message:
${message}`,
        "Tags": [
          "tag-name",
          "daily"
        ],
        "Headers": {
          "X-Mailer": "StephenJLu.com",
          "X-Test": "test header"
        }
      }),
    });

    if (!response.ok) {
      const errorData = await response.json();
      console.error('SendLayer Error:', errorData);
      return json({ error: 'Failed to send email. Please try again later.' }, { status: 500 });
    }

    return json({ success: true }, { status: 200 });
  } catch (error) {
    console.error('Error sending email:', error);
    return json({ error: 'An unexpected error occurred.' }, { status: 500 });
  }
};



export const Contact = () => {
  const name = useFormInput(''); // Add this line
  const errorRef = useRef<HTMLDivElement>(null);
  const email = useFormInput('');
  const message = useFormInput('');
  const initDelay = tokens.base.durationS;

  interface ActionData {
    success?: boolean;
    errors?: {
      name?: string;
      email?: string;
      message?: string;
    };
  }

  const actionData = useActionData<ActionData>() || {};
  const { state } = useNavigation();
  const sending = state === 'submitting';

  return (
    <Section className={styles.contact}>
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
              as="h1"
              style={getDelay(tokens.base.durationXS, initDelay, 0.3)}
            >
              <DecoderText text="Say hello" start={status !== 'exited'} delay={300} />
            </Heading>
            <Divider
              className={styles.divider}
              data-status={status}
              style={getDelay(tokens.base.durationXS, initDelay, 0.4)}
            />           
             {/* Visible name input field */}
      <Input
        id="name"
        value={name.value}
        multiline={false}
        style={{}}
        error={!!actionData.errors?.name}
        onBlur={() => {}}
        autoComplete="name"
        required={true}
        type="text"
        onChange={name.onChange}
        className={styles.name}
        label="Name"
        name="name"
        maxLength={MAX_EMAIL_LENGTH}
      />

      {/* Hidden honeypot field to identify bots */}
      <Input
        id="name"
        value=""
        multiline={false}
        style={{ display: 'none' }}
        error={false}
        onBlur={() => {}}
        autoComplete="off"
        required={false}
        type="text"
        onChange={() => {}}
        className={styles.botkiller}
        label="Bot Field"
        name="botName"
        maxLength={MAX_EMAIL_LENGTH}
      />

      {/* Existing email and message fields */}
      <Input
        id="email"
        value={email.value}
        multiline={false}
        style={{}}
        error={!!actionData.errors?.email}
        onBlur={() => {}}
        autoComplete="email"
        required={true}
        type="email"
        onChange={email.onChange}
        className={styles.email}
        label="Email"
        name="email"
        maxLength={MAX_EMAIL_LENGTH}
      />

      <Input
        id="message"
        value={message.value}
        multiline={true}
        style={{}}
        error={!!actionData.errors?.message}
        onBlur={() => {}}
        autoComplete="off"
        required={true}
        type="text"
        onChange={message.onChange}
        className={styles.message}
        label="Message"
        name="message"
        maxLength={MAX_MESSAGE_LENGTH}
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
                      {actionData?.errors?.email}
                      {actionData?.errors?.message}
                    </div>
                  </div>
                </div>
              )}
            </Transition>
            <Button
              className={styles.button}
              data-status={status}
              data-sending={sending}
              style={getDelay(tokens.base.durationM, initDelay)}
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
