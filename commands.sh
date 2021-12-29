npx aws-api-gateway-cli-test \
--username='admin@example.com' \
--password='Passw0rd!' \
--user-pool-id='us-east-1_FlfqLBWv1' \
--app-client-id='3auijjcvb3766ae27imj47mn7q' \
--cognito-region='us-east-1' \
--identity-pool-id='us-east-1:0bc15f83-4d03-43c3-b3f4-8f674194dd35' \
--invoke-url='https://k69bbhe7r1.execute-api.us-east-1.amazonaws.com' \
--api-gateway-region='us-east-1' \
--path-template='/notes' \
--method='POST' \
--body='{"content":"hello world","attachment":"hello.jpg"}'

npx aws-api-gateway-cli-test \
--username='admin@example.com' \
--password='Passw0rd!' \
--user-pool-id='us-east-1_FlfqLBWv1' \
--app-client-id='3auijjcvb3766ae27imj47mn7q' \
--cognito-region='us-east-1' \
--identity-pool-id='us-east-1:0bc15f83-4d03-43c3-b3f4-8f674194dd35' \
--invoke-url='https://k69bbhe7r1.execute-api.us-east-1.amazonaws.com' \
--api-gateway-region='us-east-1' \
--path-template='/billing' \
--method='POST' \
--body='{"source":"tok_visa","storage":21}'