
import {Services_3_2} from './services_3_2.js';
import {MoodleWebservicesLib} from './index.js';

const expect = require('expect');
const request = require('sync-request');
const querystring = require('querystring');

const MOODLE_ROOT = "http://demo.moodle.net/";
const USER = "admin";
const PASSWORD = "sandbox";

let token;

describe('MoodleWebservicesLib', function () {

	it("import is working correct", ()=>{
		expect(MoodleWebservicesLib).toExist();
	});

	it("getService", ()=>{
		const service = MoodleWebservicesLib.getService();
		expect(service).toExist();
		expect(service.version).toBe("3.2");
	});

	it("getService with fallback", ()=>{
		const otherServiceWithFallback = MoodleWebservicesLib.getService("2.2", true);
		expect(otherServiceWithFallback).toExist();
		expect(otherServiceWithFallback.version).toBe("3.2");
	});

	it("getService no fallback", ()=>{
		expect(function () {
			const noFallback = MoodleWebservicesLib.getService("2.2");
		}).toThrow(/not found/);
	});
});


describe('Services 3.2', function () {

	it("import is working correct", ()=>{
		expect(Services_3_2).toExist();
	});

	it("auth_get_token (custom name, not in ws api list)", ()=>{
		const url = MOODLE_ROOT + Services_3_2.URL_TOKEN + "?";
		const args = querystring.stringify(Services_3_2.AUTH_GET_TOKEN.args(USER, PASSWORD));
		const response = request("POST", url+ args);
		expect(response.statusCode).toBe(200);

		const parsed = JSON.parse(response.getBody('utf8'));
		console.log(parsed);
		expect(parsed).toExist();
		expect(parsed.error).toNotExist();
		expect(parsed.exception).toNotExist();
		expect(parsed.token).toExist();

		token = parsed.token;
	});

	//it("auth_email_get_signup_settings", () => {});
	//it("auth_email_signup_user", () => {});
	//it("core_auth_confirm_user", () => {});
	//it("core_badges_get_user_badges", () => {});
	//it("core_calendar_create_calendar_events", () => {});
	//it("core_calendar_delete_calendar_events", () => {});
	//it("core_calendar_get_calendar_events", () => {});
	//it("core_cohort_add_cohort_members", () => {});
	//it("core_cohort_create_cohorts", () => {});
	//it("core_cohort_delete_cohorts", () => {});
	//it("core_cohort_delete_cohort_members", () => {});
	//it("core_cohort_get_cohorts", () => {});
	//it("core_cohort_get_cohort_members", () => {});
	//it("core_cohort_update_cohorts", () => {});
	//it("core_comment_get_comments", () => {});
	//it("core_competency_add_competency_to_course", () => {});
	//it("core_competency_add_competency_to_plan", () => {});
	//it("core_competency_add_competency_to_template", () => {});
	//it("core_competency_add_related_competency", () => {});
	//it("core_competency_approve_plan", () => {});
	//it("core_competency_competency_framework_viewed", () => {});
	//it("core_competency_competency_viewed", () => {});
	//it("core_competency_complete_plan", () => {});
	//it("core_competency_count_competencies", () => {});
	//it("core_competency_count_competencies_in_course", () => {});
	//it("core_competency_count_competencies_in_template", () => {});
	//it("core_competency_count_competency_frameworks", () => {});
	//it("core_competency_count_courses_using_competency", () => {});
	//it("core_competency_count_templates", () => {});
	//it("core_competency_count_templates_using_competency", () => {});
	//it("core_competency_create_competency", () => {});
	//it("core_competency_create_competency_framework", () => {});
	//it("core_competency_create_plan", () => {});
	//it("core_competency_create_template", () => {});
	//it("core_competency_create_user_evidence_competency", () => {});
	//it("core_competency_delete_competency", () => {});
	//it("core_competency_delete_competency_framework", () => {});
	//it("core_competency_delete_evidence", () => {});
	//it("core_competency_delete_plan", () => {});
	//it("core_competency_delete_template", () => {});
	//it("core_competency_delete_user_evidence", () => {});
	//it("core_competency_delete_user_evidence_competency", () => {});
	//it("core_competency_duplicate_competency_framework", () => {});
	//it("core_competency_duplicate_template", () => {});
	//it("core_competency_get_scale_values", () => {});
	//it("core_competency_grade_competency", () => {});
	//it("core_competency_grade_competency_in_course", () => {});
	//it("core_competency_grade_competency_in_plan", () => {});
	//it("core_competency_list_competencies", () => {});
	//it("core_competency_list_competencies_in_template", () => {});
	//it("core_competency_list_competency_frameworks", () => {});
	//it("core_competency_list_course_competencies", () => {});
	//it("core_competency_list_plan_competencies", () => {});
	//it("core_competency_list_templates", () => {});
	//it("core_competency_list_templates_using_competency", () => {});
	//it("core_competency_list_user_plans", () => {});
	//it("core_competency_move_down_competency", () => {});
	//it("core_competency_move_up_competency", () => {});
	//it("core_competency_plan_cancel_review_request", () => {});
	//it("core_competency_plan_request_review", () => {});
	//it("core_competency_plan_start_review", () => {});
	//it("core_competency_plan_stop_review", () => {});
	//it("core_competency_read_competency", () => {});
	//it("core_competency_read_competency_framework", () => {});
	//it("core_competency_read_plan", () => {});
	//it("core_competency_read_template", () => {});
	//it("core_competency_read_user_evidence", () => {});
	//it("core_competency_remove_competency_from_course", () => {});
	//it("core_competency_remove_competency_from_plan", () => {});
	//it("core_competency_remove_competency_from_template", () => {});
	//it("core_competency_remove_related_competency", () => {});
	//it("core_competency_reopen_plan", () => {});
	//it("core_competency_reorder_course_competency", () => {});
	//it("core_competency_reorder_plan_competency", () => {});
	//it("core_competency_reorder_template_competency", () => {});
	//it("core_competency_request_review_of_user_evidence_linked_competencies", () => {});
	//it("core_competency_search_competencies", () => {});
	//it("core_competency_set_course_competency_ruleoutcome", () => {});
	//it("core_competency_set_parent_competency", () => {});
	//it("core_competency_template_has_related_data", () => {});
	//it("core_competency_template_viewed", () => {});
	//it("core_competency_unapprove_plan", () => {});
	//it("core_competency_unlink_plan_from_template", () => {});
	//it("core_competency_update_competency", () => {});
	//it("core_competency_update_competency_framework", () => {});
	//it("core_competency_update_course_competency_settings", () => {});
	//it("core_competency_update_plan", () => {});
	//it("core_competency_update_template", () => {});
	//it("core_competency_user_competency_cancel_review_request", () => {});
	//it("core_competency_user_competency_plan_viewed", () => {});
	//it("core_competency_user_competency_request_review", () => {});
	//it("core_competency_user_competency_start_review", () => {});
	//it("core_competency_user_competency_stop_review", () => {});
	//it("core_competency_user_competency_viewed", () => {});
	//it("core_competency_user_competency_viewed_in_course", () => {});
	//it("core_competency_user_competency_viewed_in_plan", () => {});
	//it("core_completion_get_activities_completion_status", () => {});
	//it("core_completion_get_course_completion_status", () => {});
	//it("core_completion_mark_course_self_completed", () => {});
	//it("core_completion_update_activity_completion_status_manually", () => {});
	//it("core_course_check_updates", () => {});

	it("core_course_create_categories", () => {
		const url = MOODLE_ROOT + Services_3_2.URL_WS + "?";
		const catname = "example category 2";
		const args = querystring.stringify(Services_3_2.CORE_COURSE_CREATE_CATEGORIES.args(token, catname, 0)); // TODO use core_course_get_categories to create a non existing one
		const response = request("POST", url+ args);
		expect(response.statusCode).toBe(200);
		const parsed = JSON.parse(response.getBody('utf8'));
		expect(parsed).toExist();
		expect(parsed.error).toNotExist();
		expect(parsed.exception).toNotExist();

		console.log(parsed);

		// test expected result values
		expect(parsed.id).toBeA('number');
		expect(parsed.name).toBeA('string');
		expect(parsed.name).toBe(catname);

		// test optional parameters
		// ...

		// test multiple new categories
		// ...
	});


	//it("core_course_create_courses", () => {});
	//it("core_course_delete_categories", () => {});
	//it("core_course_delete_courses", () => {});
	//it("core_course_delete_modules", () => {});
	//it("core_course_duplicate_course", () => {});
	//it("core_course_get_activities_overview", () => {});
	//it("core_course_get_categories", () => {});
	//it("core_course_get_contents", () => {});

	it("core_course_get_courses", () => {
		const url = MOODLE_ROOT + Services_3_2.URL_WS + "?";
		const args = querystring.stringify(Services_3_2.CORE_COURSE_GET_COURSES.args(token));
		const response = request("POST", url+ args);
		expect(response.statusCode).toBe(200);

		const parsed = JSON.parse(response.getBody('utf8'));
		expect(parsed).toExist();
		expect(parsed.error).toNotExist();
		expect(parsed.exception).toNotExist();

		// we just check the non-optional values here
		for (let firstCourse of parsed ) {
			expect(firstCourse.id).toBeA('number');
			expect(firstCourse.shortname).toBeA('string');
			expect(firstCourse.categoryid).toBeA('number');
			expect(firstCourse.fullname).toBeA('string');
			expect(firstCourse.displayname).toBeA('string');
			expect(firstCourse.summary).toBeA('string');
			expect(firstCourse.summaryformat).toBeA('number');
			expect(firstCourse.format).toBeA('string');
			expect(firstCourse.startdate).toBeA('number');
			expect(firstCourse.enddate).toBeA('number');
		}
	});

	//it("core_course_get_courses_by_field", () => {});
	//it("core_course_get_course_module", () => {});
	//it("core_course_get_course_module_by_instance", () => {});
	//it("core_course_get_user_administration_options", () => {});
	//it("core_course_get_user_navigation_options", () => {});
	//it("core_course_import_course", () => {});
	//it("core_course_search_courses", () => {});
	//it("core_course_update_categories", () => {});
	//it("core_course_update_courses", () => {});
	//it("core_course_view_course", () => {});

	//it("core_enrol_get_course_enrolment_methods", () => {});

	it("core_enrol_get_enrolled_users", () => {
		const url = MOODLE_ROOT + Services_3_2.URL_WS + "?";
		const args = querystring.stringify(Services_3_2.CORE_COURSE_GET_COURSES.args(token));
		const response = request("POST", url+ args);
		expect(response.statusCode).toBe(200);

		const parsed = JSON.parse(response.getBody('utf8'));
		expect(parsed).toExist();
		expect(parsed.error).toNotExist();

		const courseId = parsed[0].id; //get the first course' id
		const enrolledUsersArgs = querystring.stringify(Services_3_2.CORE_ENROL_GET_ENROLLED_USERS.args(token, courseId));
		const enrolledUsersResponse = request("POST", url+ enrolledUsersArgs);
		expect(enrolledUsersResponse.statusCode).toBe(200);

		const enrolledUsersParsed = JSON.parse(enrolledUsersResponse.getBody('utf8'));
		expect(enrolledUsersParsed).toExist();
		expect(enrolledUsersParsed.error).toNotExist();

		// we just check the non-optional values here
		for (let user of enrolledUsersParsed) {
			expect(user.id).toBeA('number');
		}

		//TODO test optional params (options)
	});

	//it("core_enrol_get_enrolled_users_with_capability", () => {});
	//it("core_enrol_get_users_courses", () => {});


	//it("core_fetch_notifications", () => {});
	//it("core_files_get_files", () => {});
	//it("core_files_upload", () => {});
	//it("core_get_component_strings", () => {});
	//it("core_get_fragment", () => {});
	//it("core_get_string", () => {});
	//it("core_get_strings", () => {});
	//it("core_grades_get_grades", () => {});
	//it("core_grades_update_grades", () => {});
	//it("core_grading_get_definitions", () => {});
	//it("core_grading_get_gradingform_instances", () => {});
	//it("core_grading_save_definitions", () => {});
	//it("core_group_add_group_members", () => {});
	//it("core_group_assign_grouping", () => {});
	//it("core_group_create_groupings", () => {});
	//it("core_group_create_groups", () => {});
	//it("core_group_delete_groupings", () => {});
	//it("core_group_delete_groups", () => {});
	//it("core_group_delete_group_members", () => {});
	//it("core_group_get_activity_allowed_groups", () => {});
	//it("core_group_get_activity_groupmode", () => {});
	//it("core_group_get_course_groupings", () => {});
	//it("core_group_get_course_groups", () => {});
	//it("core_group_get_course_user_groups", () => {});
	//it("core_group_get_groupings", () => {});
	//it("core_group_get_groups", () => {});
	//it("core_group_get_group_members", () => {});
	//it("core_group_unassign_grouping", () => {});
	//it("core_group_update_groupings", () => {});
	//it("core_message_block_contacts", () => {});
	//it("core_message_create_contacts", () => {});
	//it("core_message_data_for_messagearea_contacts", () => {});
	//it("core_message_data_for_messagearea_conversations", () => {});
	//it("core_message_data_for_messagearea_get_most_recent_message", () => {});
	//it("core_message_data_for_messagearea_get_profile", () => {});
	//it("core_message_data_for_messagearea_messages", () => {});
	//it("core_message_data_for_messagearea_search_messages", () => {});
	//it("core_message_data_for_messagearea_search_users", () => {});
	//it("core_message_data_for_messagearea_search_users_in_course", () => {});
	//it("core_message_delete_contacts", () => {});
	//it("core_message_delete_conversation", () => {});
	//it("core_message_delete_message", () => {});
	//it("core_message_get_blocked_users", () => {});
	//it("core_message_get_contacts", () => {});
	//it("core_message_get_messages", () => {});
	//it("core_message_get_message_processor", () => {});
	//it("core_message_get_unread_conversations_count", () => {});
	//it("core_message_get_user_message_preferences", () => {});
	//it("core_message_get_user_notification_preferences", () => {});
	//it("core_message_mark_all_messages_as_read", () => {});
	//it("core_message_mark_all_notifications_as_read", () => {});
	//it("core_message_mark_message_read", () => {});
	//it("core_message_message_processor_config_form", () => {});
	//it("core_message_search_contacts", () => {});
	//it("core_message_send_instant_messages", () => {});
	//it("core_message_unblock_contacts", () => {});
	//it("core_notes_create_notes", () => {});
	//it("core_notes_delete_notes", () => {});
	//it("core_notes_get_course_notes", () => {});
	//it("core_notes_get_notes", () => {});
	//it("core_notes_update_notes", () => {});
	//it("core_notes_view_notes", () => {});
	//it("core_output_load_template", () => {});
	//it("core_question_update_flag", () => {});
	//it("core_rating_add_rating", () => {});
	//it("core_rating_get_item_ratings", () => {});
	//it("core_role_assign_roles", () => {});
	//it("core_role_unassign_roles", () => {});
	//it("core_tag_get_tagindex", () => {});
	//it("core_tag_get_tags", () => {});
	//it("core_tag_update_tags", () => {});
	//it("core_update_inplace_editable", () => {});
	//it("core_user_add_user_device", () => {});
	//it("core_user_add_user_private_files", () => {});
	//it("core_user_agree_site_policy", () => {});
	//it("core_user_create_users", () => {});
	//it("core_user_delete_users", () => {});
	//it("core_user_get_course_user_profiles", () => {});
	//it("core_user_get_users", () => {});
	//it("core_user_get_users_by_field", () => {});
	//it("core_user_get_user_preferences", () => {});
	//it("core_user_remove_user_device", () => {});
	//it("core_user_set_user_preferences", () => {});
	//it("core_user_update_picture", () => {});
	//it("core_user_update_users", () => {});
	//it("core_user_update_user_preferences", () => {});
	//it("core_user_view_user_list", () => {});
	//it("core_user_view_user_profile", () => {});

	it("core_webservice_get_site_info", ()=>{
		const url = MOODLE_ROOT + Services_3_2.URL_WS + "?";
		const args = querystring.stringify(Services_3_2.CORE_WEBSERVICE_GET_SITE_INFO.args(token));
		const response = request("POST", url+ args);
		expect(response.statusCode).toBe(200);

		const parsed = JSON.parse(response.getBody('utf8'));
		expect(parsed).toExist();
		expect(parsed.error).toNotExist();
		expect(parsed.exception).toNotExist();

		// IMPORTANT: Check, if these information remains on the sandbox.
		expect(parsed.sitename).toBe('Moodle sandbox demo');
		expect(parsed.username).toBe('admin');
		expect(parsed.firstname).toBe('Admin');
		expect(parsed.lastname).toBe('User');
		expect(parsed.fullname).toBe('Admin User');
		expect(parsed.lang).toBe('en');
		expect(parsed.userid).toBe(2);
		expect(parsed.siteurl).toBe('https://demo.moodle.net');

	});

	//it("enrol_guest_get_instance_info", () => {});
	//it("enrol_manual_enrol_users", () => {});
	//it("enrol_manual_unenrol_users", () => {});
	//it("enrol_self_enrol_user", () => {});
	//it("enrol_self_get_instance_info", () => {});
	//it("gradereport_overview_get_course_grades", () => {});
	//it("gradereport_overview_view_grade_report", () => {});
	//it("gradereport_user_get_grades_table", () => {});
	//it("gradereport_user_get_grade_items", () => {});
	//it("gradereport_user_view_grade_report", () => {});
	//it("message_airnotifier_are_notification_preferences_configured", () => {});
	//it("message_airnotifier_enable_device", () => {});
	//it("message_airnotifier_get_user_devices", () => {});
	//it("message_airnotifier_is_system_configured", () => {});
	//it("message_popup_get_popup_notifications", () => {});
	//it("message_popup_get_unread_popup_notification_count", () => {});
	//it("mod_assign_copy_previous_attempt", () => {});
	//it("mod_assign_get_assignments", () => {});
	//it("mod_assign_get_grades", () => {});
	//it("mod_assign_get_participant", () => {});
	//it("mod_assign_get_submissions", () => {});
	//it("mod_assign_get_submission_status", () => {});
	//it("mod_assign_get_user_flags", () => {});
	//it("mod_assign_get_user_mappings", () => {});
	//it("mod_assign_list_participants", () => {});
	//it("mod_assign_lock_submissions", () => {});
	//it("mod_assign_reveal_identities", () => {});
	//it("mod_assign_revert_submissions_to_draft", () => {});
	//it("mod_assign_save_grade", () => {});
	//it("mod_assign_save_grades", () => {});
	//it("mod_assign_save_submission", () => {});
	//it("mod_assign_save_user_extensions", () => {});
	//it("mod_assign_set_user_flags", () => {});
	//it("mod_assign_submit_for_grading", () => {});
	//it("mod_assign_submit_grading_form", () => {});
	//it("mod_assign_unlock_submissions", () => {});
	//it("mod_assign_view_assign", () => {});
	//it("mod_assign_view_grading_table", () => {});
	//it("mod_assign_view_submission_status", () => {});
	//it("mod_book_get_books_by_courses", () => {});
	//it("mod_book_view_book", () => {});
	//it("mod_chat_get_chats_by_courses", () => {});
	//it("mod_chat_get_chat_latest_messages", () => {});
	//it("mod_chat_get_chat_users", () => {});
	//it("mod_chat_login_user", () => {});
	//it("mod_chat_send_chat_message", () => {});
	//it("mod_chat_view_chat", () => {});
	//it("mod_choice_delete_choice_responses", () => {});
	//it("mod_choice_get_choices_by_courses", () => {});
	//it("mod_choice_get_choice_options", () => {});
	//it("mod_choice_get_choice_results", () => {});
	//it("mod_choice_submit_choice_response", () => {});
	//it("mod_choice_view_choice", () => {});
	//it("mod_data_get_databases_by_courses", () => {});
	//it("mod_folder_view_folder", () => {});
	//it("mod_forum_add_discussion", () => {});
	//it("mod_forum_add_discussion_post", () => {});
	//it("mod_forum_can_add_discussion", () => {});
	//it("mod_forum_get_forums_by_courses", () => {});
	//it("mod_forum_get_forum_discussions_paginated", () => {});
	//it("mod_forum_get_forum_discussion_posts", () => {});
	//it("mod_forum_view_forum", () => {});
	//it("mod_forum_view_forum_discussion", () => {});
	//it("mod_glossary_add_entry", () => {});
	//it("mod_glossary_get_authors", () => {});
	//it("mod_glossary_get_categories", () => {});
	//it("mod_glossary_get_entries_by_author", () => {});
	//it("mod_glossary_get_entries_by_author_id", () => {});
	//it("mod_glossary_get_entries_by_category", () => {});
	//it("mod_glossary_get_entries_by_date", () => {});
	//it("mod_glossary_get_entries_by_letter", () => {});
	//it("mod_glossary_get_entries_by_search", () => {});
	//it("mod_glossary_get_entries_by_term", () => {});
	//it("mod_glossary_get_entries_to_approve", () => {});
	//it("mod_glossary_get_entry_by_id", () => {});
	//it("mod_glossary_get_glossaries_by_courses", () => {});
	//it("mod_glossary_view_entry", () => {});
	//it("mod_glossary_view_glossary", () => {});
	//it("mod_imscp_get_imscps_by_courses", () => {});
	//it("mod_imscp_view_imscp", () => {});
	//it("mod_lti_create_tool_proxy", () => {});
	//it("mod_lti_create_tool_type", () => {});
	//it("mod_lti_delete_tool_proxy", () => {});
	//it("mod_lti_delete_tool_type", () => {});
	//it("mod_lti_get_ltis_by_courses", () => {});
	//it("mod_lti_get_tool_launch_data", () => {});
	//it("mod_lti_get_tool_proxies", () => {});
	//it("mod_lti_get_tool_proxy_registration_request", () => {});
	//it("mod_lti_get_tool_types", () => {});
	//it("mod_lti_is_cartridge", () => {});
	//it("mod_lti_update_tool_type", () => {});
	//it("mod_lti_view_lti", () => {});
	//it("mod_page_view_page", () => {});
	//it("mod_quiz_get_attempt_access_information", () => {});
	//it("mod_quiz_get_attempt_data", () => {});
	//it("mod_quiz_get_attempt_review", () => {});
	//it("mod_quiz_get_attempt_summary", () => {});
	//it("mod_quiz_get_combined_review_options", () => {});
	//it("mod_quiz_get_quizzes_by_courses", () => {});
	//it("mod_quiz_get_quiz_access_information", () => {});
	//it("mod_quiz_get_quiz_feedback_for_grade", () => {});
	//it("mod_quiz_get_quiz_required_qtypes", () => {});
	//it("mod_quiz_get_user_attempts", () => {});
	//it("mod_quiz_get_user_best_grade", () => {});
	//it("mod_quiz_process_attempt", () => {});
	//it("mod_quiz_save_attempt", () => {});
	//it("mod_quiz_start_attempt", () => {});
	//it("mod_quiz_view_attempt", () => {});
	//it("mod_quiz_view_attempt_review", () => {});
	//it("mod_quiz_view_attempt_summary", () => {});
	//it("mod_quiz_view_quiz", () => {});
	//it("mod_resource_view_resource", () => {});
	//it("mod_scorm_get_scorms_by_courses", () => {});
	//it("mod_scorm_get_scorm_attempt_count", () => {});
	//it("mod_scorm_get_scorm_scoes", () => {});
	//it("mod_scorm_get_scorm_sco_tracks", () => {});
	//it("mod_scorm_get_scorm_user_data", () => {});
	//it("mod_scorm_insert_scorm_tracks", () => {});
	//it("mod_scorm_launch_sco", () => {});
	//it("mod_scorm_view_scorm", () => {});
	//it("mod_survey_get_questions", () => {});
	//it("mod_survey_get_surveys_by_courses", () => {});
	//it("mod_survey_submit_answers", () => {});
	//it("mod_survey_view_survey", () => {});
	//it("mod_url_view_url", () => {});
	//it("mod_wiki_edit_page", () => {});
	//it("mod_wiki_get_page_contents", () => {});
	//it("mod_wiki_get_page_for_editing", () => {});
	//it("mod_wiki_get_subwikis", () => {});
	//it("mod_wiki_get_subwiki_files", () => {});
	//it("mod_wiki_get_subwiki_pages", () => {});
	//it("mod_wiki_get_wikis_by_courses", () => {});
	//it("mod_wiki_new_page", () => {});
	//it("mod_wiki_view_page", () => {});
	//it("mod_wiki_view_wiki", () => {});
	//it("report_competency_data_for_report", () => {});
	//it("tool_lp_data_for_competencies_manage_page", () => {});
	//it("tool_lp_data_for_competency_frameworks_manage_page", () => {});
	//it("tool_lp_data_for_competency_summary", () => {});
	//it("tool_lp_data_for_course_competencies_page", () => {});
	//it("tool_lp_data_for_plans_page", () => {});
	//it("tool_lp_data_for_plan_page", () => {});
	//it("tool_lp_data_for_related_competencies_section", () => {});
	//it("tool_lp_data_for_templates_manage_page", () => {});
	//it("tool_lp_data_for_template_competencies_page", () => {});
	//it("tool_lp_data_for_user_competency_summary", () => {});
	//it("tool_lp_data_for_user_competency_summary_in_course", () => {});
	//it("tool_lp_data_for_user_competency_summary_in_plan", () => {});
	//it("tool_lp_data_for_user_evidence_list_page", () => {});
	//it("tool_lp_data_for_user_evidence_page", () => {});
	//it("tool_lp_list_courses_using_competency", () => {});
	//it("tool_lp_search_cohorts", () => {});
	//it("tool_lp_search_users", () => {});
	//it("tool_mobile_get_autologin_key", () => {});
	//it("tool_mobile_get_config", () => {});
	//it("tool_mobile_get_plugins_supporting_mobile", () => {});
	//it("tool_mobile_get_public_config", () => {});
	//it("tool_templatelibrary_list_templates", () => {});
	//it("tool_templatelibrary_load_canonical_template", () => {});
	//it("tool_usertours_complete_tour", () => {});
	//it("tool_usertours_fetch_and_start_tour", () => {});
	//it("tool_usertours_reset_tour", () => {});
	//it("tool_usertours_step_shown", () => {});
});