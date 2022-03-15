import mailgun from "mailgun-js";
import { NextApiRequest, NextApiResponse } from "next";

const apiKey = process.env.MAILGUN_API_KEY ?? "";
const domain = process.env.MAILGUN_DOMAIN ?? "";

const email = mailgun({ apiKey, domain });

function sendEmail(from: string, to: string, subject: string, text: string) {
  return new Promise((resolve, reject) =>
    email.messages().send(
      {
        from,
        to,
        subject,
        text,
      },
      (error, body) => {
        if (error) {
          reject(error);
        } else {
          resolve(body);
        }
      }
    )
  );
}

export default (req: NextApiRequest, res: NextApiResponse) => {
  const { from, to, subject, text } = JSON.parse(req.body);

  sendEmail(from, to, subject, text)
    .then(() => {
      res.statusCode = 200;
      res.send("success");
    })
    .catch(() => {
      res.statusCode = 400;
      res.send("failure");
    });
};
