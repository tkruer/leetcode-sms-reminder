import { Twilio } from 'twilio';

export async function sendSMS({ message }: { message: string }): Promise<boolean> {

    const accountSid = process.env.TWILLIO_ACCOUNT_SID;
    const authToken = process.env.TWILLIO_AUTH_TOKEN;
    const twilioNumber = process.env.TWILLIO_PHONE_NUMBER;
    const phone_number = process.env.YOUR_PHONE_NUMBER;

    if (accountSid && authToken && twilioNumber) {
        const client = new Twilio(accountSid, authToken);
      
        client.messages
          .create({
            from: twilioNumber,
            to: `${phone_number}`,
            body: `${message}`,
          })          
        return false
      } else {        
        return true
    }
}
