(function() {
	
	alert("JiraMax_test");

	var issueKey = getIssueKey();
	if (issueKey == '') {
		alert(issueKey);
	} else {
		alert('JIRA issueKey not found!');
		return;
	}

	var macoHost = '';
	var userName = prompt('User Name');
	var password = prompt('Password');
	var authKey = btoa(userName + ':' + password);

	alert(authKey);

	/*
	 * initJobBudgetLines(); createJobBudgetLines();
	 */

	function getIssueKey() {
		// <meta name="ajs-issue-key" content="......">
		var metas = document.getElementsByTagName('meta');
		for (i = 0; i < metas.length; i++) {
			if (metas[i].getAttribute('name') == 'ajs-issue-key') {
				return metas[i].getAttribute('content');
			}
		}
		return '';
	}

})();