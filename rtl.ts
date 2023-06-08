export function rtl(rtlValue: any, value: any) {
  return ({ theme: { isRTL } }) => (isRTL ? rtlValue : value);
}
