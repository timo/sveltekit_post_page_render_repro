export const actions = {
    default: async ({ request }) => {
        let data = await request.formData();
        console.log("the form data is:", data);

        const jsoned_result = JSON.stringify({
            title: data.get("sent_title") + " interpteted by server",
            message: data.get("sent_message") + " interpreted by server"
        });

        console.log(jsoned_result, "jsoned result");

        return { success: true, content: jsoned_result }; 

    }
}