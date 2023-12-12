import { WhatsappAttributes } from "../interfaces/attributes";
import { isMobile, shareEncodedUrl } from "../utils/utils";

export class WhatsApp {
    static generateUrl(doc: Document, options: WhatsappAttributes) { 
        const mobile: boolean = isMobile(doc);
        let urlString = mobile ? 'https://api.whatsapp.com/send?text=' : 'https://web.whatsapp.com/send?text=';

        if (options.text) {
            urlString += encodeURIComponent(options.text) + '%0A';
        }
        //default to the current page if a URL isn't specified
        urlString += shareEncodedUrl(doc, options.url);
        
        return urlString;
    }
}