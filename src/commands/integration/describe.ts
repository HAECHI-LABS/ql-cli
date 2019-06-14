import { Command, flags } from '@oclif/command';
import integrationRpc from '../../rpc/integration';
import { MISSING_INTEGRATIONID_ARGS } from '../../errors';

export default class Describe extends Command {
  public static description = 'describe a integration';
  public static examples = [`$ henesis integration:describe my-integration-id-xqxz`];
  public static flags = {};
  public static args = [{ name: 'integrationId' }];

  public async run() {
    const { args } = this.parse(Describe);
    if (args.integrationId === undefined) {
      await this.config.runHook('analyticsSend', {
        error: MISSING_INTEGRATIONID_ARGS,
      });
      this.error(MISSING_INTEGRATIONID_ARGS, { exit: 1 });
    }

    try {
      const integration = await integrationRpc.getIntegration(
        args.integrationId,
      );
      await this.config.runHook('analyticsSend', {
        command: 'integration:describe',
      });
      this.log(JSON.stringify(integration, undefined, 2));
    } catch (err) {
      await this.config.runHook('analyticsSend', { error: err });
      this.error(err.message, { exit: 1 });
    }
  }
}
