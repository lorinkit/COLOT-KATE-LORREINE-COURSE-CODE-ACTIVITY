"use server";
import React from "react";
import MainLayout from "@/components/layout/MainLayout";
import { getUsers } from "@/services/user.service";
import User from "@/types/user";

export default async function Home() {
  const users = await getUsers();
  return (
    <MainLayout>
      <div
        style={{
          backgroundImage: 'url("https://images.pexels.com/photos/4352247/pexels-photo-4352247.jpeg?auto=compress&cs=tinysrgb&w=600")',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          minHeight: '100vh',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'flex-start', // Aligns content to the top
          paddingTop: '50px', // Adjusted to bring the table higher
        }}
      >
        <section style={{ textAlign: 'center' }}>
          <h1 style={{ fontSize: '24px', color: 'black' }}>User list</h1>
          <table
            className="text-black border"
            style={{
              minWidth: '600px',
              backgroundColor: 'white',
              borderCollapse: 'collapse',
              margin: '0 auto',
              fontSize: '18px',
            }}
          >
            <thead>
              <tr style={{ backgroundColor: '#f0f0f0' }}>
                <th className="text-center px-6 py-4">Id</th>
                <th className="text-center px-6 py-4">Username</th>
                <th className="text-center px-6 py-4">Fullname</th>
              </tr>
            </thead>
            <tbody>
              {users.length > 0
                ? users.map((user: User, index: number) => (
                    <tr
                      key={index}
                      style={{
                        backgroundColor: index % 2 === 0 ? 'white' : '#f9f9f9',
                      }}
                    >
                      <td className="text-center px-6 py-4">{user.id}</td>
                      <td className="text-center px-6 py-4">{user.username}</td>
                      <td className="text-center px-6 py-4">{user.fullname}</td>
                    </tr>
                  ))
                : null}
            </tbody>
          </table>
        </section>
      </div>
    </MainLayout>
  );
}
