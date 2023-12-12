import { TumblerAttributes } from "../interfaces/attributes";
import { shareEncodedUrl } from "../utils/utils";

export class Tumbler {
    static generateUrl(doc: Document, options: TumblerAttributes) { 
        return `http://tumblr.com/widgets/share/tool?canonicalUrl=${shareEncodedUrl(doc, options.canonicalUrl)}`;
    }
}