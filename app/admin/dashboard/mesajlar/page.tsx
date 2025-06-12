'use client';
import React, { useState, useEffect } from 'react';
import AdminNavbar from '../../../../components/AdminNavbar';
import { getMessages, deleteMessage, updateMessage } from '@/lib/api';

interface Message {
  id: number;
  name: string;
  email: string;
  message: string;
  date: string;
  isRead: boolean;
}

export default function AdminMesajlarPage() {
  const [messages, setMessages] = useState<Message[]>([]);
  const [selectedMessage, setSelectedMessage] = useState<Message | null>(null);

  // Mesajları API'den çek
  const fetchMessages = async () => {
    try {
      const res = await getMessages();
      setMessages(res as Message[]);
    } catch {
      // Mesajlar yüklenemedi
    }
  };
  useEffect(() => {
    fetchMessages();
  }, []);

  // Mesajı okundu olarak işaretle
  const handleMarkAsRead = async (messageId: number) => {
    try {
      const msg = messages.find((m) => m.id === messageId);
      if (msg) {
        await updateMessage(messageId, { ...msg, isRead: true });
        fetchMessages();
      }
    } catch {
      // Mesaj güncellenemedi
    }
  };

  // Mesaj sil
  const handleDelete = async (messageId: number) => {
    try {
      await deleteMessage(messageId);
      fetchMessages();
    if (selectedMessage?.id === messageId) {
      setSelectedMessage(null);
      }
    } catch {
      // Mesaj silinemedi
    }
  };

  return (
    <>
      <AdminNavbar />
      <main className="min-h-screen bg-gray-50">
        <div className="container mx-auto px-4 py-8">
          <h1 className="text-3xl font-bold mb-8 text-[#1a2a2a]">Mesajlar</h1>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Mesaj Listesi */}
            <div className="md:col-span-1">
              <div className="bg-white rounded-lg shadow-md overflow-hidden">
                <div className="divide-y divide-gray-200">
                  {messages.map((message) => (
                    <div
                      key={message.id}
                      className={`p-4 cursor-pointer hover:bg-gray-50 ${
                        selectedMessage?.id === message.id ? 'bg-gray-50' : ''
                      } ${!message.isRead ? 'font-semibold text-[#1a2a2a]' : 'text-gray-700'}`}
                      onClick={() => setSelectedMessage(message)}
                    >
                      <div className="flex justify-between items-start">
                        <div>
                          <div className="text-sm text-[#1a2a2a]">{message.name}</div>
                          <div className="text-sm text-gray-500">{message.email}</div>
                        </div>
                        <div className="text-xs text-gray-500">{message.date}</div>
                      </div>
                      <div className="mt-1 text-sm text-gray-700 truncate">
                        {message.message}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Mesaj Detayı */}
            <div className="md:col-span-2">
              {selectedMessage ? (
                <div className="bg-white rounded-lg shadow-md p-6">
                  <div className="flex justify-between items-start mb-6">
                    <div>
                      <h2 className="text-xl font-semibold text-[#1a2a2a]">{selectedMessage.name}</h2>
                      <div className="text-gray-500">{selectedMessage.email}</div>
                    </div>
                    <div className="text-sm text-gray-500">
                      {selectedMessage.date}
                    </div>
                  </div>

                  <div className="prose max-w-none mb-6 text-[#1a2a2a]">
                    {selectedMessage.message}
                  </div>

                  <div className="flex justify-end space-x-4">
                    {!selectedMessage.isRead && (
                      <button
                        onClick={() => handleMarkAsRead(selectedMessage.id)}
                        className="text-[#38b97e] hover:text-[#2d9c6a]"
                      >
                        Okundu Olarak İşaretle
                      </button>
                    )}
                    <button
                      onClick={() => handleDelete(selectedMessage.id)}
                      className="text-red-600 hover:text-red-900"
                    >
                      Sil
                    </button>
                  </div>
                </div>
              ) : (
                <div className="bg-white rounded-lg shadow-md p-6 text-center text-gray-500">
                  Mesaj seçilmedi
                </div>
              )}
            </div>
          </div>
        </div>
      </main>
    </>
  );
} 