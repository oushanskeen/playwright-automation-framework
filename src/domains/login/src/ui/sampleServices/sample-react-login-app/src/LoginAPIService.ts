export default function LoginAPIService() {

    let postReqData = ""
    let postResData = ""

    return {
        post: async function (input: string) {
            console.log("[LoginAPIService.ts/post] input: ", input)
            postReqData = input//.split(" ")[1]
            const [login,pass] = postReqData.split("?")[1].split("&").map(e => e.split("=")[1])
            const postRes = await fetch("http://localhost:3000/login", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    login: login,
                    pass: pass,
                }),
            });
            postResData = await postRes.json()
            console.log("[LoginAPIService.ts/post] postResData: ", postResData)

        },
        getLatestResponse: async function () {
            console.log("[LoginAPIService.ts/post] getLatestResponse: postReqData", postReqData)
            const resJson: any = postResData
            console.log("[LoginAPIService.ts/getLatestResponse] resJson: ", resJson["callStatus"])
            return resJson["callStatus"]
        }
    }

}   