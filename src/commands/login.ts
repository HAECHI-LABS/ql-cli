import configstore from '../common/configstore';
import { default as UserRPC } from '../rpc/user';
import { emailPrompt, passwordPrompt } from '../utils';
import Command from '../common/base';

export default class Login extends Command {
  public static description = 'perform a login';

  public static examples = [
    `$ henesis login
email:
password: 
`,
  ];

  public static flags = {};

  public static args = [];

  public async run(): Promise<void> {
    const user = configstore.get('user');
    if (user) {
      this.log(`You are already logged in as ${user.email}`);
    } else {
      const email = await emailPrompt();
      const password = await passwordPrompt();

      try {
        const userInfo = await UserRPC.login(email, password);
        configstore.set('user', userInfo);
        this.log(`🎉 Login Success from ${userInfo.email} 🎉`);
      } catch (err) {
        configstore.delete('analytics');
        this.error(err.message);
        this.exit(1);
      }
    }
  }
}
