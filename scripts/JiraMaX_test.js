(function() {

	alert("JiraMax_test");

	var issueKey = getIssueKey();
	if (issueKey != '') {
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

	var job = getJobNumber();

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

	function getJobNumber() {
		var jiraProject = issueKey.substring(0, issueKey.indexOf('-'));
		if (jiraProject.length > 0) {
			alert(jiraProject);
			switch (jiraProject) {
				case 'HDASB': return 'ASB';
				case 'HDASE': return 'ASE';
				case 'HDJIC': return 'JIC';
				case 'HDKSB': return 'KSB';
				case 'HDNIC': return 'NIC';
			}
		}
		return '';
	}

})();