import autobind from 'autobind-decorator';
import Module from '@/module';
import Message from '@/message';

export default class extends Module {
	public readonly name = 'ping';

	@autobind
	public install() {
		return {
			mentionHook: this.mentionHook
		};
	}

	@autobind
	private async mentionHook(msg: Message) {
		if (msg.text && msg.text.includes('ping')) {
			msg.reply('PONG!って打つのめんどくさいんですよ！', {
				immediate: true
			});
			this.ai.api('notes/reactions/create', {
				noteId: msg.id,
				reaction: ':eltu:'
			});
			return true;
		} else {
			return false;
		}
	}
}
