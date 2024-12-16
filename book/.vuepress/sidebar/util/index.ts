export const FOLDER_ICON = "folder";

export function buildSimpleNavObj(title: string, icon: string = "markdown-black") {
  return {
    text: title,
    link: title,
    icon: icon,
  };
}
