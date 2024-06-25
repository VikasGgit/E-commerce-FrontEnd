import Category from "../modals/category.model"
import Product from "../modals/product.model"

const createProduct=async(reqData)=>{
    let topLevel= await Category.findOne({name: reqData.topLevelCategory})
    if(!topLevel){
        topLevel= new Category({
            name: reqData.topLevelCategory,
            level:1
        })
    }
    let secondLevel= await Category.findOne({name: reqData.secondLevelCategory, 
    parentCategory: topLevel._id})

    if(!secondLevel){
        secondLevel= new Category({
            name: reqData.secondLevelCategory,
            level:2,
            parentCategory:topLevel._id,
        })
    }

    let thirdLevel= await Category.findOne({name: reqData.thirdLevelCategory, 
        parentCategory: secondLevel._id})
        if(!thirdLevel){
            thirdLevel= new Category({
                name: reqData.thirdLevelCategory,
                level:3, 
                parentCategory: secondLevel._id
            })
        }

        const product= new Product({
            title: reqData.title,
            description: reqData.description,
            price: reqData.price,
            discountedPrice: reqData.discountedPrice,
            discount: reqData.discount,
            quantity: reqData.quantity,
            brand: reqData.brand,
            color: reqData.color,
            sizes: reqData.size,
            imageUrl: reqData.imageUrl,
            category: topLevel._id
        })

        return await product.save();
}

const deleteProduct = async (productId)=>{
    // const product= await findProductById(productId);
    await Product.findByIdAndDelete(productId)
    return "Product deleted successfully"
}

const updateProduct = async (productId, reqData)=>{

        return await Product.findByIdAndUpdate(productId, reqData)
}

const getAllProducts=async (reqData)=>{
    let {category, color, sizes, minPrice, maxPrice, minDiscount, sort, stock, pageNumber, pageSize} = reqData
    pageSize=pageSize || 10;
     
    let query= await Product.find().populate("category")
    if(category){
            const isCategory = Category.find({name: category});
            if(isCategory){
                query= await query.where("category").equals(isCategory._id);
            }
            else{
                return {content:[], currentPage:1, totalPages:0}
            }
    }

    if(color){
        const colorSet=new Set(color.split(",").map(item=>item.trim().towercase()))
        const colorRegex= colorSet.size>0? new RegExp([...colorSet].join("|"), i) :null;
        query= await query.where("color").regex(colorRegex)
    }
    if(sizes){
        const sizeSet=new Set(sizes);
        query= await query.where("size").in([...sizeSet])
    }

    if(minPrice && maxPrice){
        query= await query.where("discountedPrice").gte(minPrice).lte(maxPrice)
    }
    if(minDiscount){
        query= await query.where("discount").gt(minDiscount);
    }
    if(stock){
        if(stock=="in stock"){
            query= await query.where("quantity").gt(0);
        }
        else query= await query.where("quantity").gt(1);
    }
    if(sort){
        const sortDirection=sort=="price_high"?-1:1;
        query= query.sort({discoutedPrice:sortDirection})
    }

    const totalProducts= await Product.countDocuments(query)
    const skip=(pageNumber -1)*pageSize
    query= query.skip(skip).limit(pageSize);
    const products = await query.exec();
    const totalPages=Math.ceil(totalProducts/pageSize)

    return {content: products, totalPages: totalPages, currentPage: pageNumber}
}

const createMultipleProducts = async (products)=>{
        for(let product of products){
            await createProduct(product)
        }
}

const findProductById = async (productId)=>{
    const product= await Product.findById(productId).populate("category").exec()
    if(!product) throw new Error("Product not found")
    return product;
}

export {
    findProductById, createMultipleProducts, createProduct, getAllProducts, updateProduct, deleteProduct
}