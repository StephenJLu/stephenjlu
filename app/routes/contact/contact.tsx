import React, { useState, useRef } from 'react';
import { Button, DecoderText, Divider, Heading, Icon, Input, Section, Text,
  tokens, Transition } from 'app/components/Components';
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

export async function action ({ request, context }: { request: Request, context: any }) {
  const formData = await request.formData();
  const name = formData.get('name') as string;
  const email = formData.get('email') as string;
  const message = formData.get('message') as string;
// SendLayer API endpoint
  const sendLayerEndpoint = 'https://console.sendlayer.com/api/v1/email'; // Update based on documentation

try {
    const response = await fetch(sendLayerEndpoint, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${context.cloudflare.env.SL_API_KEY}`,
      },
      body: JSON.stringify({
        "from": {
          "name": "StephenJLu.com",
          "email": "no-reply@stephenjlu.com"
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

    console.log('Received POST request');
    console.log('Name:', name);
console.log('Email:', email);
console.log('Message:', message);
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
        error={false}
        onBlur={() => {}}
        autoComplete="name"
        required={true}
        type="text"
        onChange={name.onChange}
        className={styles.name}
        label="Name"
        name="name"
        maxLength={100}
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
        maxLength={500}
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
        maxLength={500}
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

