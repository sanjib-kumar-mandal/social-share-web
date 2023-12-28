import { EmailAttributes } from "../interfaces/attributes";
import { shareEncodedUrl } from "../utils/utils";

export class Email {
  static generateUrl(options: EmailAttributes) {
    let urlString = "mailto:";

    if (options.to) {
      urlString += encodeURIComponent(options.to);
    }

    urlString += "?";

    if (options.body) {
      urlString += "body=" + encodeURIComponent(options.body);
    }

    if (options.subject) {
      urlString += "&subject=" + encodeURIComponent(options.subject);
    }

    if (options.cc) {
      urlString += "&cc=" + encodeURIComponent(options.cc);
    }

    if (options.bcc) {
      urlString += "&bcc=" + encodeURIComponent(options.bcc);
    }

    return urlString;
  }
}
