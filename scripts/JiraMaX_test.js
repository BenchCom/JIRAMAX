alert("JiraMax_test");

// <meta name="ajs-issue-key" content="......">

var jiraMax_issueKey = jiraMax_getIssueKey();
alert(jiraMax_issueKey);

function jiraMax_getIssueKey() {
	var jiraMax_metas = document.getElementsByTagName('meta');
    // alert(jiraMax_metas);
    // alert(jiraMax_metas.length);
	for (i  = 0; i < jiraMax_metas.length; i++) {
    		// alert(jiraMax_metas[i].getAttribute('name'));
			if (jiraMax_metas[i].getAttribute('name') == 'ajs-issue-key') {
				return jiraMax_metas[i].getAttribute('content');
			}
	}
	return 'JIRA issueKey not found!';
}



