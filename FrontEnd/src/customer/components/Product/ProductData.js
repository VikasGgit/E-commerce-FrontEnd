export const filters=[
    {
        id:"color",
        name:"Color",
        options :[
            { value:"white", label:"White",},
            { value:"blue", label:"White",},
            { value:"green", label:"Green",},
            { value:"red", label:"Red",},
            { value:"brown", label:"Brown",},
            { value:"purple", label:"Purple",},
            { value:"yellow", label:"Yellow",},
 
        ]
    },
    {
        id:"size",
        name:"Size",
        options:[
            {value:"S", label:"S",},
            {value:"M", label:"M",},
            {value:"X", label:"X",},
        ]
    },
]

export const singleFilters=[
    {
        id:"price",
        name:"Price",
        options:[
            {value:"0-499", label:"₹0 - ₹499",},
            {value:"500-999", label:"₹500 - ₹999",},
            {value:"1000-99999", label:"₹1000+",},
        ]
    },
    {
        id:"discount range",
        name:"Discount",
        options:[
            {value:"0", label:"0%-10%"},
            {value:"11", label:"11%-25%"},
            {value:"26", label:"26%-40%"},
            {value:"41", label:"41% +"},
            
        ]
    },
    {
        id:"availability",
        name:"Availability",
        options:[
            { value:"instock", label:"in-stock"}, 
            { value:"outstock", label:"out-stock"}, 
            
        ]
    }
]