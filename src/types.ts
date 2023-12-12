/*
    By default let's just make everything optional except the data we are after
*/

export interface LeetcodeQuestion {
    stat:       Stat;
    status?:     null;
    difficulty?: Difficulty;
    paid_only?:  boolean;
    is_favor?:   boolean;
    frequency?:  number;
    progress?:   number;
}

export interface Difficulty {
    level?: number;
}

export interface Stat {
    question_id?:                           number;
    question__article__live?:               null;
    question__article__slug?:               null;
    question__article__has_video_solution?: null;
    question__title:                       string;
    question__title_slug:                  string;
    question__hide?:                        boolean;
    total_acs?:                             number;
    total_submitted?:                       number;
    frontend_question_id?:                  number;
    is_new_question?:                       boolean;
}
