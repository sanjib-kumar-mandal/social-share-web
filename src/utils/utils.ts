export const shareEncodedUrl = (
  doc: Document,
  socialShareUrl?: string,
): string => encodeURIComponent(socialShareUrl ?? doc.URL ?? "");

// Same implementation as in class @deckdeckgo/utils
export const isMobile = (doc: Document): boolean => {
  const isTouchScreen: boolean =
    doc.defaultView?.matchMedia("(any-pointer:coarse)").matches ?? false;
  const isMouseScreen: boolean =
    doc.defaultView?.matchMedia("(any-pointer:fine)").matches ?? false;

  return isTouchScreen && !isMouseScreen;
};

export const openWindow = (doc: Document, url: string, target?: string) => {
  const win = doc.defaultView;
  if (win) {
    win.open(url, target ?? "_blank");
  }
};
