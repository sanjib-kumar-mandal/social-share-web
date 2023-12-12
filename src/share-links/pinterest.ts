import { PinterestAttributes } from "../interfaces/attributes";
import { shareEncodedUrl } from "../utils/utils";

export class Pinterest {
    static generateUrl(doc: Document, options: PinterestAttributes) { 
        if (options.url) {
            let urlString: string = `https://www.pinterest.com/pin/create/button/?url=${shareEncodedUrl(doc, options.url)}`;
          
            if (options.media) {
              urlString += '&media=' + encodeURIComponent(options.media);
            }
          
            if (options.description) {
              urlString += '&description=' + encodeURIComponent(options.description);
            }            
            return urlString;
        } else {
            return null;
        }
    }
}