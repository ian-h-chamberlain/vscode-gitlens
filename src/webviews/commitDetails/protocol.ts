import type { IssueOrPullRequest } from '../../git/models/issue';
import { IpcCommandType, IpcNotificationType } from '../protocol';

export type CommitSummary = {
	sha: string;
	summary: string;
	message?: string;
	author: Record<string, any>;
	shortSha: string;
	avatar?: string;
};

export type CommitDetails = {
	committer?: Record<string, any>;
	files?: Record<string, any>[];
	stats?: Record<string, any>;
} & CommitSummary;

export type RichCommitDetails = {
	formattedMessage?: string;
	pullRequest?: IssueOrPullRequest;
	issues?: IssueOrPullRequest[];
};

export type State = {
	commits?: CommitSummary[];
} & Record<string, any>;

export type ShowCommitDetailsViewCommandArgs = string[];

// COMMANDS
export interface FileParams {
	path: string;
	repoPath: string;
}
export const OpenFileOnRemoteCommandType = new IpcCommandType<FileParams>('commit/file/openOnRemote');
export const OpenFileCommandType = new IpcCommandType<FileParams>('commit/file/open');
export const FileCompareWorkingCommandType = new IpcCommandType<FileParams>('commit/file/compareWorking');
export const FileComparePreviousCommandType = new IpcCommandType<FileParams>('commit/file/comparePrevious');
export const FileMoreActionsCommandType = new IpcCommandType<FileParams>('commit/file/moreActions');
export const CommitActionsCommandType = new IpcCommandType<undefined>('commit/moreActions');
export const PickCommitCommandType = new IpcCommandType<undefined>('commit/pickCommit');
export const SearchCommitCommandType = new IpcCommandType<undefined>('commit/searchCommit');
export const AutolinkSettingsCommandType = new IpcCommandType<undefined>('commit/autolinkSettings');

// NOTIFICATIONS
export interface DidChangeParams {
	state: State;
}
export const DidChangeNotificationType = new IpcNotificationType<DidChangeParams>('commit/didChange');

export const RichContentNotificationType = new IpcNotificationType<RichCommitDetails>('commit/richContent');
