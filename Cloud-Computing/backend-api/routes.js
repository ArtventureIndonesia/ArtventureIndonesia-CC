// Import dari Handler
// const { addUserToFirebase } = require("./handler")
// const { getAll, deleteAll } = require("./handler/all");
const {
    getAllUsers,
    getUsers,
    makeUsers,
    editUsers,
    deleteUsers,
} = require("./handler/users");
// const {
//     getAllLaundry,
//     getLaundry,
//     makeLaundry,
//     editLaundry,
//     deleteLaundry,
// } = require("./handler/laundry");
// const {
//     getAllTransaksi,
//     getTransaksi,
//     makeTransaksi,
//     editTransaksi,
//     deleteTransaksi,
// } = require("./handler/transaction");

const routes = [
    // Tambah Data Users
    {
        method: "POST",
        path: "/users",
        handler: makeUsers,
        options: {
            payload: {
                maxBytes: 10485760,
                multipart: true,
                output: 'stream'
            },
        },
    },

    // Ambil Data Users
    {
        method: "GET",
        path: "/users/{id}",
        handler: getUsers,
    },

    // Hapus Data Users Tertentu
    {
        method: "DELETE",
        path: "/users/{id}",
        handler: deleteUsers
    },

    // Edit Data Users Tertentu
    {
        method: "PUT",
        path: "/users/{id}",
        handler: editUsers,
        options: {
            payload: {
                maxBytes: 10485760,
                multipart: true,
                output: 'stream'
            },
        },
    },

    // Ambil Seluruh Data Users
    {
        method: "GET",
        path: "/users",
        handler: getAllUsers,
    },
]

// const routes = [
//     // all - Ambil Seluruh Data Database
//     {
//         method: "GET",
//         path: "/",
//         handler: getAll,
//     },

//     // all - Hapus Seluruh Data Database
//     {
//         method: "DELETE",
//         path: "/",
//         handler: deleteAll,
//     },

//     // users - Ambil Seluruh Data Users
//     {
//         method: "GET",
//         path: "/users",
//         handler: getAllUsers,
//     },

//     // users - Ambil Data Users Tertentu
//     {
//         method: "GET",
//         path: "/users/{id}",
//         handler: getUsers,
//     },

//     // users - Buat Data Users Baru
//     {
//         method: "POST",
//         path: "/users",
//         handler: makeUsers,
//         options: {
//             payload: {
//                 maxBytes: 10485760,
//                 multipart: true,
//                 output: 'stream'
//             },
//         },
//     },

//     // users - Edit Data Users Tertentu
//     {
//         method: "PUT",
//         path: "/users/{id}",
//         handler: editUsers,
//         options: {
//             payload: {
//                 maxBytes: 10485760,
//                 multipart: true,
//                 output: 'stream'
//             },
//         },
//     },

//     // users - Hapus Data Users Tertentu
//     {
//         method: "DELETE",
//         path: "/users/{id}",
//         handler: deleteUsers,
//     },

    // // laundry - Ambil Seluruh Data Laundry
    // {
    //     method: "GET",
    //     path: "/laundry",
    //     handler: getAllLaundry,
    // },

    // // laundry - Ambil Data Laundry Tertentu
    // {
    //     method: "GET",
    //     path: "/laundry/{id}",
    //     handler: getLaundry,
    // },

    // // laundry - Buat Data Laundry Baru
    // {
    //     method: "POST",
    //     path: "/laundry",
    //     handler: makeLaundry,
    //     options: {
    //         payload: {
    //             maxBytes: 10485760,
    //             multipart: true,
    //             output: 'stream'
    //         },
    //     },
    // },

    // // laundry - Edit Data Laundry Tertentu
    // {
    //     method: "PUT",
    //     path: "/laundry/{id}",
    //     handler: editLaundry,
    //     options: {
    //         payload: {
    //             maxBytes: 10485760,
    //             multipart: true,
    //             output: 'stream'
    //         },
    //     },
    // },

    // // laundry - Hapus Data Laundry Tertentu
    // {
    //     method: "DELETE",
    //     path: "/laundry/{id}",
    //     handler: deleteLaundry,
    // },

    // // transaksi - Ambil Seluruh Data Transaksi
    // {
    //     method: "GET",
    //     path: "/transaction",
    //     handler: getAllTransaksi,
    // },

    // // transaksi - Ambil Data Transaksi Tertentu
    // {
    //     method: "GET",
    //     path: "/transaction/{id}",
    //     handler: getTransaksi,
    // },

    // // transaksi - Buat Data Transaksi Baru
    // {
    //     method: "POST",
    //     path: "/transaction",
    //     handler: makeTransaksi,
    //     options: {
    //         payload: {
    //             maxBytes: 10485760,
    //             multipart: true,
    //             output: 'stream'
    //         },
    //     },
    // },

    // // transaksi - Edit Data Transaksi Tertentu
    // {
    //     method: "PUT",
    //     path: "/transaction/{id}",
    //     handler: editTransaksi,
    //     options: {
    //         payload: {
    //             maxBytes: 10485760,
    //             multipart: true,
    //             output: 'stream'
    //         },
    //     },
    // },

    // // transaksi - Hapus Data Transaksi Tertentu
    // {
    //     method: "DELETE",
    //     path: "/transaction/{id}",
    //     handler: deleteTransaksi,
    // },

    // {
    //     method: "POST",
    //     path: "/signup",
    //     handler: addUserToFirebase,
    //         // ... authentication logic
        
    // },
// ];

// Export Routes
module.exports = routes;
