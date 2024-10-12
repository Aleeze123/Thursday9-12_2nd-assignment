import React from 'react';
import { FaFacebook, FaInstagram, FaTwitter, FaWhatsapp, FaYoutube, FaTiktok } from 'react-icons/fa';

const Footer = () => {
    return (
        <footer className="bg-gray-800 text-white py-8">
            <div className="container mx-auto px-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                    <div className="mb-4">
                        <h3 className="font-bold text-lg mb-2">100% Original Products Guaranteed</h3>
                        <p className="text-sm">Quality Guaranty</p>
                        <p className="text-sm">100% Guaranteed Products</p>
                        <h4 className="font-bold mt-2">SUPPORT 24/7</h4>
                        <p className="text-sm">Always available to answer your Questions</p>
                        <h4 className="font-bold mt-2">FREE RETURNS</h4>
                        <p className="text-sm">Free return or exchange within 7 days</p>
                        <p className="text-sm mt-2">Pakistan&apos;s no. 1 place to buy 100% original discounted perfumes.</p>
                    </div>
                    <div className="mb-4">
                        <h3 className="font-bold text-lg mb-2">Contact Us</h3>
                        <p className="text-sm">WhatsApp: <a href="https://wa.me/923456789012" className="text-yellow-500">+92 1234568</a></p>
                        <p className="text-sm">Email: <a href="mailto:sales@perfumehut.com.pk" className="text-yellow-500">perfume.com.pk</a></p>
                        <p className="text-sm">Karachi, Pakistan</p>
                    </div>
                    <div className="mb-4">
                        <h3 className="font-bold text-lg mb-2">Recent Posts</h3>
                        <ul className="text-sm">
                            <li><a href="#" className="text-yellow-500 hover:underline">Top 10 Fragrances for Spring 2024</a> - March 15, 2024</li>
                            <li><a href="#" className="text-yellow-500 hover:underline">A Beginner&apos;s Guide to Choosing Perfumes</a> - January 5, 2024</li>
                        </ul>
                    </div>
                    <div className="mb-4">
                        <h3 className="font-bold text-lg mb-2">TOP BRANDS</h3>
                        <ul className="text-sm">
                            <li>Aleeza PERFUMES</li>
                            <li>Scent of Asia</li>
                            <li>Ishq Perfumes</li>
                            <li>BURBERRY PERFUMES</li>
                            <li>J. (Junaid Jamshed)</li>
                            <li>Essence of Arabia</li>
                            <li>Emaan Fragrances</li>
                        </ul>
                    </div>
                    <div className="mb-4">
                        <h3 className="font-bold text-lg mb-2">USEFUL LINKS</h3>
                        <ul className="text-sm">
                            <li><a href="#" className="text-yellow-500 hover:underline">Wholesale Program</a></li>
                            <li><a href="#" className="text-yellow-500 hover:underline">Latest News</a></li>
                            <li><a href="#" className="text-yellow-500 hover:underline">Contact Us</a></li>
                        </ul>
                    </div>
                    <div className="col-span-1 sm:col-span-2 md:col-span-3 mb-4">
                        <h3 className="font-bold text-lg mb-2">Follow Us</h3>
                        <div className="flex justify-center space-x-4">
                            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="hover:text-yellow-500">
                                <FaFacebook size={24} />
                            </a>
                            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="hover:text-yellow-500">
                                <FaInstagram size={24} />
                            </a>
                            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="hover:text-yellow-500">
                                <FaTwitter size={24} />
                            </a>
                            <a href="https://wa.me/923456789012" target="_blank" rel="noopener noreferrer" className="hover:text-yellow-500">
                                <FaWhatsapp size={24} />
                            </a>
                            <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" className="hover:text-yellow-500">
                                <FaYoutube size={24} />
                            </a>
                            <a href="https://tiktok.com" target="_blank" rel="noopener noreferrer" className="hover:text-yellow-500">
                                <FaTiktok size={24} />
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;