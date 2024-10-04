let login_data = [
	{
		user_id: "WEWERFKSAF-JFFKKSA-FZHDSKWE-JYEIRLKWQ",
		user_name: "ashish",
		pass_word: "ashish@!2#4%",
		user_agent: "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/88.0.4324.150 Safari/537.36",
		website: "https://icicibank.com",
		date_captured: String(+new Date())
	},
	{
		user_id: "ASLKHFKSAF-FKKLSA-SHSDSKWE-WYEIRLKWQ",
		user_name: "harry",
		pass_word: "harry@!2#4%",
		user_agent: "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Firefox/88.0.4324.150 Safari/537.36",
		website: "https://office365.com",
		date_captured: String(+new Date(+(new Date()) - Math.floor(Math.random() * 10000000000)))
	},
	{
		user_id: "ASLKHFKSAF-FKKLSA-SHSDSKWE-WYEIRLKWQ",
		user_name: "manoj",
		pass_word: "manoj@!2#4%",
		user_agent: "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/88.0.4324.150 Safari/537.36 Edg/88.0.705.68",
		website: "https://google.com",
		date_captured: String(+new Date(+(new Date()) - Math.floor(Math.random() * 10000000000)))
	},
	{
		user_id: "ASLKHFKSAF-FKKLSA-SHSDSKWE-WYEIRLKWQ",
		user_name: "man",
		pass_word: "man@!2#4%",
		user_agent: "Mozilla/5.0 (Windows NT 10.0; WOW64; Trident/7.0; rv:11.0) like Gecko",
		website: "https://facebook.com",
		date_captured: String(+new Date(+(new Date()) - Math.floor(Math.random() * 10000000000)))

	},
	{
		user_id: "WEWERFKSAF-JFFKKSA-FZHDSKWE-JYEIRLKWQ",
		user_name: "ashish",
		pass_word: "ashish@!2#4%",
		user_agent: "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/88.0.4324.150 Safari/537.36 Opera/88.0.705.68",
		website: "https://icicibank.com",
		date_captured: String(+new Date())
	},
	{
		user_id: "ASLKHFKSAF-FKKLSA-SHSDSKWE-WYEIRLKWQ",
		user_name: "harry",
		pass_word: "harry@!2#4%",
		user_agent: "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Safari/537.36 Opera/88.0.705.68",
		website: "https://office365.com",
		date_captured: String(+new Date(+(new Date()) - Math.floor(Math.random() * 10000000000)))
	},
	{
		user_id: "ASLKHFKSAF-FKKLSA-SHSDSKWE-WYEIRLKWQ",
		user_name: "manoj",
		pass_word: "manoj@!2#4%",
		user_agent: "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/88.0.4324.150 Safari/537.36",
		website: "https://google.com",
		date_captured: String(+new Date(+(new Date()) - Math.floor(Math.random() * 10000000000)))
	},
	{
		user_id: "ASLKHFKSAF-FKKLSA-SHSDSKWE-WYEIRLKWQ",
		user_name: "man",
		pass_word: "man@!2#4%",
		user_agent: "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Firefox/88.0.4324.150 Safari/537.36",
		website: "https://facebook.com",
		date_captured: String(+new Date(+(new Date()) - Math.floor(Math.random() * 10000000000)))

	}

]


function create_login_card(one_login_data) {

	/*
		Edge: Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/88.0.4324.150 Safari/537.36 Edg/88.0.705.68
		IE: Mozilla/5.0 (Windows NT 10.0; WOW64; Trident/7.0; rv:11.0) like Gecko
		Opera: Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/88.0.4324.150 Safari/537.36 Opera/88.0.705.68
		Safari: Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Safari/537.36 Opera/88.0.705.68
	*/
	let user_agent_img_tag = `<img src="images/svgs/chrome.svg" alt="Chrome Browser" width=42 height=42>`;
	if (one_login_data.user_agent.match("Firefox")) {
		user_agent_img_tag = `<img src="images/svgs/firefox.svg" alt="Firefox Browser" width=42 height=42>`;
	} else if (one_login_data.user_agent.match("Safari") && !one_login_data.user_agent.match("Chrome")) {
		user_agent_img_tag = `<img src="images/svgs/safari.svg" alt="Safari Browser" width=42 height=42>`;
	} else if (one_login_data.user_agent.match("Trident")) {
		user_agent_img_tag = `<img src="images/svgs/ie.svg" alt="IE Browser" width=42 height=42>`;
	} else if (one_login_data.user_agent.match("Edg")) {
		user_agent_img_tag = `<img src="images/svgs/edge.svg" alt="Edge Browser" width=42 height=42>`;
	} else if (one_login_data.user_agent.match("Opera")) {
		user_agent_img_tag = `<img src="images/svgs/opera.svg" alt="Edge Browser" width=42 height=42>`;
	} else {
		user_agent_img_tag = `<img src="images/svgs/chrome.svg" alt="Edge Browser" width=42 height=42>`;
	}

	let login_card = `

	<div class="card mb-4 shadow" style="border-radius: 6px">
		<div class="card-body ">
			<p>
				<h5 class="card-title">ID: ${one_login_data.user_id}</h5>
			</p>
			<table class="table table-bordered table-no-dark" style="font-size: 18px; font-weight: 500; border-radius: 10px!important;">
				<tbody>
					<tr>
						<td>Website Name:</td>
						<td>
							<span class="badge bg-dark" style="font-size: 18px;">${one_login_data.website}</span>
						</td>
					</tr>
					<tr>
						<td>Username:</td>
						<td>
							<span class="badge bg-dark" style="font-size: 18px;">${one_login_data.user_name}</span>
						</td>
					</tr>
					<tr>
						<td>Password:</td>
						<td>
							<span class="badge bg-dark" style="font-size: 18px;">${one_login_data.pass_word}</span>
						</td>
					</tr>
					<tr>
						<td>UserAgent:</td>
						<td>
							${user_agent_img_tag}
						</td>
					</tr>
					<tr>
						<td>Date Captured:</td>
						<td>
							${new Date(parseInt(one_login_data.date_captured)).toLocaleString()}
						</td>
					</tr>
				</tbody>
			</table>
			<a href="#" class="card-link">More Info</a>
			<a href="#" class="card-link">Login Details</a>
		</div>
	</div>
	
	`;
	return login_card;
}

function populate_login_cards(login_data) {
	let login_data_holder = document.querySelector(".login-data-holder");
	login_data_holder.innerHTML = "";
	for (one_login_data of login_data) {
		login_data_holder.innerHTML += create_login_card(one_login_data);
	}
}

populate_login_cards(login_data);