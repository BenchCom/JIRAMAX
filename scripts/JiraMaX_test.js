alert("JiraMax_test");

// <meta name="ajs-issue-key" content="......">

var jiraMax_issueKey = jiraMax_getIssueKey();
alert(jiraMax_issueKey);

jiraMax_getIssueKey() {
	var jiraMax_metas = document.querySelector('meta');
	for (i  = 0; i < jiraMax_metas.length; i++) {
			if (jiraMax_metas[i].getAttribute('name') == 'ajs-issue-key') {
				return jiraMax_metas[i].getAttribute('content');
			}
	}
	return 'JIRA issueKey not found!';
}



