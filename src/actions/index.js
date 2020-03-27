import { REQUEST_POSTS, RECEIVE_POSTS, SELECT_SUBREDDIT, INVALIDATE_SUBREDDIT } from './types';
import fetch from 'cross-fetch';

export function selectSubreddit(subreddit) {
    return {
        type: 'SELECT_SUBREDDIT',
        subreddit
    }
}

export function invalidateSubreddit(subreddit) {
    return {
        type: 'INVALIDATE_SUBREDDIT',
        subreddit
    }
}

export function requestPosts(subreddit) {
    return {
        type: 'REQUEST_POSTS',
        subreddit
    }
}