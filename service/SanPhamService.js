export default class SanPhamService{
    getSanPhamList = () => {
        return axios({
            method: 'get',
            url: 'https://62e77b3993938a545bd290d6.mockapi.io/Glasses',
        });
    }

    getDetailSanPham =(id) =>{
        return axios({
            method: 'get',
            url: `https://62e77b3993938a545bd290d6.mockapi.io/Glasses/${id}`,
        });
    }



}