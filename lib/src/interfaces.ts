/**
 * Created by bohoffi on 29.05.2017.
 */

export interface ModuleConfig {
  apiKey: string;
  base: string;
  tables: {
    [alias: string]: string;
  };
}
