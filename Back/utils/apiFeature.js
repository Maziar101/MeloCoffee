class ApiFeature {
    constructor(query,queryString){
        this.query = query;
        this.queryString = queryString;
    };
    filters(){
        const queryObj = {...this.queryString};
        const fieldItems = ['page','sort','limit','fields'];
        for(const key in queryObj){
            delete queryObj[key];
        };
        this.query = this.query.find(queryObj);
        return this;
    };
    sort(){
        if(this.queryString.sort){
            const sortBy = this.queryString.sort.split(",").join(" ");
            this.query = this.query.sort(sortBy);
        }else{
            this.query=this.query.sort("-createdAt");
        }
        return this;
    };
    limitFields(){
        if(this.queryString.fields){
            const fieldsBy = this.queryString.fields.split(",").join(" ");
            this.query =  this.query.select(fieldsBy);
        }else{
            this.query = this.query.select("__v");
        };
        return this;
    }
    paginate(){
        const page = this.queryString.page*1||1;
        let limit = this.queryString.limit*1||100;
        let skip = (page-1)*limit;
        this.query=this.query.skip(skip).limit(limit);
        return this;
    }
};
export default ApiFeature;