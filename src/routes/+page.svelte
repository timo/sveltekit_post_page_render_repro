<script>
    const activate_thing = async () => {
        let submittedData = new FormData();
        submittedData.append("sent_title", "here is the title")
        submittedData.append("sent_message", "here is the message");


        let mail = await fetch(`/render_endpoint`, {
            method: 'POST',
            body: new URLSearchParams(submittedData),
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded'
            }
        });

        console.log("the mail text we got is " + await mail.text());
    }
</script>

<button on:click={activate_thing}>please click me thanks</button>