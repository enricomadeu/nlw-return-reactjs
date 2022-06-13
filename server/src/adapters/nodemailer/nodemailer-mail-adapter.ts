import nodemailer from "nodemailer";
import { MailAdapter, SendMailData } from "../mail-adapter";

const transport = nodemailer.createTransport({
  host: "smtp.mailtrap.io",
  port: 2525,
  auth: {
    user: "1d7d55cf9d2b34",
    pass: "4d38554f6a6c81"
  }
});

export class NodemailerMailAdapter implements MailAdapter {
  async sendMail({ subject, body }: SendMailData) {
    await transport.sendMail({
      from: "Equipe Feedget <>oi@feedget.com",
      to: "Enrico Fernandes <enricomfernandes@gmail.com>",
      subject,
      html: body,
    });
  }
}