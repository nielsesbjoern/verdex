type MailLabels = {
  firm: string;
  area: string;
  websiteStatus: string;
  goal: string;
  timeline: string;
  name: string;
  email: string;
  note: string;
};

type MailCopy = {
  header: string;
  intro: string;
  sectionBriefing: string;
  sectionContact: string;
  footer: string;
};

const RULE = "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━";
const DIVIDER = "──────────────────────────────────────";

function section(title: string, body: string[]) {
  return [`▸ ${title}`, ...body.map((line) => `  ${line}`), ""];
}

function padLabel(label: string, value: string, width = 10) {
  return `  ${label.padEnd(width)}  ${value}`;
}

export function buildBriefingMailBody({
  labels,
  mail,
  firm,
  areas,
  websiteStatus,
  goal,
  timeline,
  name,
  email,
  note,
}: {
  labels: MailLabels;
  mail: MailCopy;
  firm: string;
  areas: string[];
  websiteStatus: string;
  goal: string;
  timeline: string;
  name: string;
  email: string;
  note?: string;
}): string {
  const areaLines =
    areas.length > 1 ? areas.map((a) => `· ${a}`) : areas.length === 1 ? [areas[0]] : ["—"];

  const lines = [
    RULE,
    `  ${mail.header}`,
    RULE,
    "",
    mail.intro,
    "",
    DIVIDER,
    `  ${mail.sectionBriefing}`,
    DIVIDER,
    "",
    ...section(labels.firm.toUpperCase(), [firm]),
    ...section(labels.area.toUpperCase(), areaLines),
    ...section(labels.websiteStatus.toUpperCase(), [websiteStatus]),
    ...section(labels.goal.toUpperCase(), [goal]),
    ...section(labels.timeline.toUpperCase(), [timeline]),
    DIVIDER,
    `  ${mail.sectionContact}`,
    DIVIDER,
    "",
    padLabel(labels.name, name),
    padLabel(labels.email, email),
    "",
  ];

  if (note?.trim()) {
    lines.push(...section(labels.note.toUpperCase(), note.trim().split("\n")));
  }

  lines.push(DIVIDER, `  ${mail.footer}`, DIVIDER);

  return lines.join("\n");
}

export function buildBriefingMailSubject(prefix: string, firm: string): string {
  return `${prefix} ${firm}`;
}
