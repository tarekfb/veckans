type DynamicPost = {
    title: string;
    content: string;
}
type RedditPost = {
    kind: string;
    data: {
      after: string;
      dist: number;
      modhash: string;
      geo_filter: string;
      children: RedditPostChild[];
      before: null;
    };
  };
  
  type RedditPostChild = {
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