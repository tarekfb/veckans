type Token = {
	access_token: string;
	token_type: string;
	expires_in: number;
	scope: string;
}

type Listing = {
	kind: string;
	data: {
		after: string | null;
		dist: number | null;
		modhash: string;
		geo_filter: string;
		children: PostComment[];
		before: string | null;
	};
};

type Replies = {
	kind: string;
	data: {
		after: string | null;
		dist: number | null;
		modhash: string;
		geo_filter: string;
		children: PostComment[];
		before: string | null;
	};
}

type RecursiveComment = {
	comment: PostComment;
	level: number;
};

type PostComment = {
	kind: string;
	data: CommentData;
};

type FormattedComment = {
	id: string;
	parentId: string;
	body: string;
	level: number;
};

type CommentData = {
	subreddit_id: string;
	approved_at_utc: null;
	author_is_blocked: boolean;
	comment_type: null;
	awarders: any[];
	mod_reason_by: null;
	banned_by: null;
	author_flair_type: string;
	total_awards_received: number;
	subreddit: string;
	author_flair_template_id: null;
	likes: null;
	replies: {
		kind: string;
		data: {
			after: null;
			dist: null;
			modhash: string;
			geo_filter: string;
			children: PostComment[];
			before: null;
		};
	} | undefined;
	user_reports: any[];
	saved: boolean;
	id: string;
	banned_at_utc: null;
	mod_reason_title: null;
	gilded: number;
	archived: boolean;
	collapsed_reason_code: null;
	no_follow: boolean;
	author: string;
	can_mod_post: boolean;
	created_utc: number;
	send_replies: boolean;
	parent_id: string;
	score: number;
	author_fullname: string;
	approved_by: null;
	mod_note: null;
	all_awardings: any[];
	collapsed: boolean;
	body: string;
	edited: boolean;
	top_awarded_type: null;
	author_flair_css_class: null;
	name: string;
	is_submitter: boolean;
	downs: number;
	author_flair_richtext: any[];
	author_patreon_flair: boolean;
	body_html: string;
	removal_reason: null;
	collapsed_reason: null;
	distinguished: null;
	associated_award: null;
	stickied: boolean;
	author_premium: boolean;
	can_gild: boolean;
	gildings: Record<string, number>;
	unrepliable_reason: null;
	author_flair_text_color: null;
	score_hidden: boolean;
	permalink: string;
	subreddit_type: string;
	locked: boolean;
	report_reasons: null;
	created: number;
	author_flair_text: null;
	treatment_tags: any[];
	link_id: string;
	subreddit_name_prefixed: string;
	controversiality: number;
	depth: number;
	author_flair_background_color: null;
	collapsed_because_crowd_control: null;
	mod_reports: any[];
	num_reports: null;
	ups: number;
};

type PostCollection = {
	kind: string;
	data: {
		after: string;
		dist: number;
		modhash: string;
		geo_filter: string;
		children: RawPost[];
		before: null;
	};
};

type RawPost = {
	kind: string;
	data: {
		approved_at_utc: null;
		subreddit: string;
		selftext: string;
		author_fullname: string;
		saved: boolean;
		mod_reason_title: null;
		gilded: number;
		clicked: boolean;
		title: string;
		link_flair_richtext: { e: string; t: string }[];
		subreddit_name_prefixed: string;
		hidden: boolean;
		pwls: number;
		link_flair_css_class: string;
		downs: number;
		thumbnail_height: null;
		top_awarded_type: null;
		hide_score: boolean;
		name: string;
		quarantine: boolean;
		link_flair_text_color: string;
		upvote_ratio: number;
		author_flair_background_color: null;
		subreddit_type: string;
		ups: number;
		total_awards_received: number;
		media_embed: {};
		thumbnail_width: null;
		author_flair_template_id: null;
		is_original_content: boolean;
		user_reports: [];
		secure_media: null;
		is_reddit_media_domain: boolean;
		is_meta: boolean;
		category: null;
		secure_media_embed: {};
		link_flair_text: string;
		can_mod_post: boolean;
		score: number;
		approved_by: null;
		is_created_from_ads_ui: boolean;
		author_premium: boolean;
		thumbnail: string;
		edited: boolean;
		author_flair_css_class: null;
		author_flair_richtext: [];
		gildings: {};
		content_categories: null;
		is_self: boolean;
		mod_note: null;
		created: number;
		link_flair_type: string;
		wls: number;
		removed_by_category: null;
		banned_by: null;
		author_flair_type: string;
		domain: string;
		allow_live_comments: boolean;
		selftext_html: string;
		likes: null;
		suggested_sort: null;
		banned_at_utc: null;
		view_count: null;
		archived: boolean;
		no_follow: boolean;
		is_crosspostable: boolean;
		pinned: boolean;
		over_18: boolean;
		all_awardings: [];
		awarder: [];
		media_only: boolean;
		link_flair_template_id: string;
		can_gild: boolean;
		spoiler: boolean;
		locked: boolean;
		author_flair_text: null;
		treatment_tags: [];
		visited: boolean;
		removed_by: null;
		num_reports: null;
		distinguished: null;
		subreddit_id: string;
		author_is_blocked: boolean;
		mod_reason_by: null;
		removal_reason: null;
		link_flair_background_color: string;
		id: string;
		is_robot_indexable: boolean;
		report_reasons: null;
		author: string;
		discussion_type: null;
		num_comments: number;
		send_replies: boolean;
		whitelist_status: string;
		contest_mode: boolean;
		mod_reports: [];
		author_patreon_flair: boolean;
		author_flair_text_color: null;
		permalink: string;
		parent_whitelist_status: string;
		stickied: boolean;
		url: string;
		subreddit_subscribers: number;
		created_utc: number;
		num_crossposts: number;
		media: null;
		is_video: boolean;
	};
};
