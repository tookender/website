// time/utils.ts

// Configuration constants
export const fontWidthFactors = {
  colfax: 1.1,
  colfax_bold: 1.15,
  mt: 1.05,
  monts: 0.95,
  mr: 1,
  t: 1.4,
  h: 1.15,
  a: 1,
  test: 1.3,
};

export const scaleFactor = 0.7;
export const maxFontSize = 260;
export const minFontSize = 40;

export const getRegionName = (code?: string): string => {
  if (!code) return "Loading";
  return (
    new Intl.DisplayNames(["en"], { type: "region" }).of(code) ?? "Country"
  );
};

export const calculateSize = (timeString: string) => {
  const availableWidth = window.innerWidth * 0.9 * scaleFactor;
  const charCount = timeString.replace(/[^0-9]/g, "").length;

  const charWidth = Math.min(availableWidth / (charCount * 1.1), 999);
  let fontSize = Math.floor(charWidth * 1.1 * fontWidthFactors.colfax);

  fontSize = Math.min(Math.max(fontSize, minFontSize), maxFontSize);

  return {
    fontSize,
    lineHeight: Math.floor(fontSize * 0.9),
    marginLeft: (window.innerWidth - charCount * charWidth) / 2,
  };
};

export const formatTimeDate = (timezone?: string) => {
  const now = new Date();
  if (!timezone) return { time: "00:00:00", date: "Loading date..." };

  return {
    time: new Intl.DateTimeFormat("en-GB", {
      hour: "2-digit",
      minute: "2-digit",
      second: "2-digit",
      hour12: false,
      timeZone: timezone,
    }).format(now),
    date: new Intl.DateTimeFormat("en-US", {
      weekday: "long",
      year: "numeric",
      month: "long",
      day: "numeric",
      timeZone: timezone,
    }).format(now),
  };
};