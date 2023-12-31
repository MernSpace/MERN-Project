import {create} from "zustand";
import axios from "axios";

const productStore = create((set)=>({
    BrandList:[],
    CategoryList:[],
    SliderList:[],
    ListByBrand:[],
    ListByCategory:[],
    ListBySmilier:[],
    ListByKeyword:[],
    ListByRemark:[],
    Details:[],
    ReviewList:[],

    BrandListRequest:async ()=>{
        let res = await axios.get("/api/v1/ProductBrandList");
        if(res.data["status"]==="success"){
            set({BrandList:res.data['data']})
        }
    },
    CategoryListRequest:async ()=>{
        let res = await axios.get("/api/v1/ProductCategoryList");
        if(res.data["status"]==="success"){
            set({CategoryList:res.data['data']})
        }
    },
    SliderListRequest:async ()=>{
        let res = await axios.get("/api/v1/ProductSliderList");
        if(res.data["status"]==="success"){
            set({SliderList:res.data['data']})
        }
    },
    ListByBrandRequest:async (BrandID)=>{
        let res = await axios.get(`/api/v1/ProductListByBrand/${BrandID}`);
        if(res.data["status"]==="success"){
            set({ListByBrand:res.data['data']})
        }
    },
    ListByCategoryRequest:async (CategoryID)=>{
        let res = await axios.get(`/api/v1/ProductListByCategory/${CategoryID}`);
        if(res.data["status"]==="success"){
            set({ListByCategory:res.data['data']})
        }
    },
    ListBySmilierRequest:async (CategoryID)=>{
        let res = await axios.get(`/api/v1/ProductListBySmilier/${CategoryID}`);
        if(res.data["status"]==="success"){
            set({ListBySmilier:res.data['data']})
        }
    },
    ListByKeywordRequest:async (Keyword)=>{
        let res = await axios.get(`/api/v1/ProductListByKeyword/${Keyword}`);
        if(res.data["status"]==="success"){
            set({ListByKeyword:res.data['data']})
        }
    },
    ListByRemarkRequest:async (Remark)=>{
        let res = await axios.get(`/api/v1/ProductListByRemark/${Remark}`);
        if(res.data["status"]==="success"){
            set({ListByRemark:res.data['data']})
        }
    },
    DetailsRequest:async (ProductID)=>{
        let res = await axios.get(`/api/v1/ProductDetails/${ProductID}`);
        if(res.data["status"]==="success"){
            set({Details:res.data['data']})
        }
    },
    ReviewListRequest:async (ProductID)=>{
        let res = await axios.get(`/api/v1/ProductReviewList/${ProductID}`);
        if(res.data["status"]==="success"){
            set({ReviewList:res.data['data']})
        }
    },


}))
export  default productStore;



