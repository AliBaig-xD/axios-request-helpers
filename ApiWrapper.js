// GET request
export const getAPI = async (url, query = null, withAuth = false) => {
    withAuth ? await setApiHeader() : unSetApiHeader();
    try {
        const res = await axios.get(url, {
            params: query
        })
        return { data: res, error: {}, isError: false }
    } catch (err) {
        return {
            error: err.response.data,
            data: {},
            isError: true
        }
    }
}

// PUT Request
export const putAPIWrapper = async (url, body, isFormData = false) => {
    await setApiHeader();
    isFormData ? await setFormDataHeader() : null
    try {
        const res = await axios.put(url, body)
        return { data: res, error: {}, isError: false }
    } catch (err) {
        return {
            error: err.response.data,
            data: {},
            isError: true
        }
    }
}

// PATCH Request
export const patchAPIWrapper = async (url, body, withAuth = true) => {
    withAuth ? await setApiHeader() : unSetApiHeader();
    try {
        const res = await axios.patch(url, body)
        return { data: res, error: {}, isError: false }
    } catch (err) {
        return {
            error: err.response.data,
            data: {},
            isError: true
        }
    }
}

// DELETE API WRAPPER
export const deleteAPIWrapper = async url => {
    await setApiHeader()
    try {
        const res = await axios.delete(url)
        return { data: res, error: {}, isError: false }
    } catch (err) {
        return {
            error: err.response.data,
            data: {},
            isError: true
        }
    }
}

// POST API WRAPPER
export const postAPIWrapper = async (url, body, withAuth = false, isFormData = false) => {
    withAuth ? await setApiHeader() : unSetApiHeader();
    isFormData ? await setFormDataHeader() : null;
    
    try {
        const res = await axios.post(url, body)
        return { data: res, error: {}, isError: false }
    } catch (err) {
        return {
            error: err.response.data,
            data: {},
            isError: true
        }
    }
}

const unSetApiHeader = () => {
    delete axios.defaults.headers.common.Authorization
}

const setApiHeader = async () => {
    axios.defaults.headers.common['Authorization'] = 'Bearer ' + ('USER_TOKEN_HERE')
}

const setFormDataHeader = async () => {
    axios.defaults.headers.common['Content-Type'] = 'multipart/form-data'
}
