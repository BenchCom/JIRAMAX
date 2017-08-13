(function() {

	var issueKey = getIssueKey();
	if (issueKey == '') {
		alert('JIRA issueKey not found!');
		return;	
	}
	
	var macoHost = 'http://192.168.1.170:8082/containers/v1/prod/';
	var jbl = '/jobbudgetlinedependencies/';
	var userName = prompt('User Name');
	var password = prompt('Password');
	var authKey = btoa(userName + ':' + password);
	//alert(authKey);

	var jobNumber = getJobNumber();
	var taskName = issueKey.substring(issueKey.indexOf('-') + 1);
	
	if (sumLineExists()) {
		alert('Sum Line with TaskName' + taskName + ' exists already.');
		return;
	}
	
	if (!confirm('Job Budget Lines do not exist yet for ' + issueKey + ' ticket.\n' 
			   + 'Do you want to create them now?') {
		return;
	};
	

	/*
	 * todo:
	 * check if sumline exists by filter
	 * create new lines with jobbudgetlinedependencies/card
	 * 
	 */
	

/*
 * function definitions follow
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

	function getJobNumber() {
		var jiraProject = issueKey.substring(0, issueKey.indexOf('-'));
		if (jiraProject.length > 0) {
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
	
	function sumLineExists() {
		    var xhttp = new XMLHttpRequest();
		    xhttp.open('POST', macoHost, true);
		    xhttp.setRequestHeader('Content-type', 'application/json');
		    xhttp.setRequestHeader('Accept', 'application/json');
		    xhttp.setRequestHeader('Accept-language', 'en-US');
		    xhttp.setRequestHeader('Authorization', 'Basic ' + authKey);
		    xhttp.setRequestHeader('Maconomy-Authentication', 'X-Basic, X-Force-Maconomy-Credentials');
		    xhttp.send();
		    var response = JSON.parse(xhttp.responseText);
		return true;
	}

})();