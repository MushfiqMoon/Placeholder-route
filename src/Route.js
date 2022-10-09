import {
    createBrowserRouter,
} from "react-router-dom";
import Layout from './components/Layout';
import AllPost from './components/AllPost';
import PostDetails from './components/PostDetails';
import PageNotFound from './components/PageNotFound';
import User from './components/User';
import AllUsers from "./components/AllUsers";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <Layout />,
        errorElement: <PageNotFound />,
        children: [{
            path: "/",
            loader: async ({ params }) => {
                return fetch(`https://jsonplaceholder.typicode.com/posts`);
            },
            element: <AllPost />,
        },
        {
            path: "post/:postId",
            loader: async ({ params }) => {
                return fetch(`https://jsonplaceholder.typicode.com/posts/${params.postId}`);
            },
            element: <PostDetails />,
        },
        {
            path: "user/:id",
            loader: async ({ params }) => {
                return fetch(`https://jsonplaceholder.typicode.com/users/${params.id}`);
            },
            element: <User />,
        },
        {
            path: "all-users",
            loader: async () => fetch(`https://jsonplaceholder.typicode.com/users`),
            element: <AllUsers />,
        },
        ]
    },
]);