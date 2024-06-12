export interface Config {
  site: {
    name: string;
    description: string;
    url: string;
    version: string;
  };
}

export const config = {
  site: {
    name: 'iTeaching',
    description: 'Das iTeaching Dashboard für Schüler.',
    url: "",
    version: process.env.NEXT_PUBLIC_SITE_VERSION || '0.0.0',
  },
} satisfies Config;
