abstract class AxiosApiClient implements IApiClient {
    getBaseUrl():String;

    call(...) {
        return axios.calll (this.getBaseUrl())
    }
}

export { ICallAPI };