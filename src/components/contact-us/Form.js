'use client'

import { useState } from 'react'
import { ChevronDown } from 'lucide-react'
import PhoneInput from 'react-phone-input-2'
import 'react-phone-input-2/lib/style.css'

export default function Form() {
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        country: '',
        city: '',
        street: '',
        zipCode: '',
        company: '',
        iAm: '',
        subject: '',
        interestedIn: '',
        message: '',
        newsletter: false
    })

    const handleSubmit = (e) => {
        e.preventDefault()

    }

    return (
        <form onSubmit={handleSubmit} className="max-w-4xl mx-auto p-4 space-y-6 mt-5">
            <h3 className='text-5xl font-extrabold text-center text-gray-700 bg-clip-text bg-gradient-to-r from-pink-300 to-blue-300 mb-12'>Connect With Us</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                    <label className="block">
                        <span className="text-sm">
                            <span className="text-red-500">*</span> First Name
                        </span>
                        <input
                            type="text"
                            required
                            className="mt-1 block w-full rounded-none border-b border-red-300 focus:outline-none focus:ring-2 focus:rounded focus:px-2 py-2 transition-colors"
                            placeholder="First Name"
                            value={formData.firstName}
                            onChange={(e) => setFormData({ ...formData, firstName: e.target.value })}
                        />
                    </label>
                </div>
                <div className="space-y-2">
                    <label className="block">
                        <span className="text-sm">
                            <span className="text-red-500">*</span> Last Name
                        </span>
                        <input
                            type="text"
                            required
                            className="mt-1 block w-full rounded-none border-b border-red-300 focus:outline-none focus:ring-2 focus:rounded focus:px-2 py-2 transition-colors"
                            placeholder="Last Name"
                            value={formData.lastName}
                            onChange={(e) => setFormData({ ...formData, lastName: e.target.value })}
                        />
                    </label>
                </div>

                <div className="space-y-2">
                    <label className="block">
                        <span className="text-sm">
                            <span className="text-red-500">*</span> Email
                        </span>
                        <input
                            type="email"
                            required
                            className="mt-1 block w-full rounded-none border-b border-red-300 focus:outline-none focus:ring-2 focus:rounded focus:px-2 py-2 transition-colors"
                            placeholder="Email"
                            value={formData.email}
                            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        />
                    </label>
                </div>
                <div className="space-y-2">
                    <label className="block">
                        <span className="text-sm">
                            <span className="text-red-500">*</span> Phone Number
                        </span>
                        <PhoneInput
                            country={'us'}
                            value={formData.phone}
                            onChange={(phone) => setFormData({ ...formData, phone })}
                            inputStyle={{
                                width: '100%',
                                height: '2.5rem',
                                fontSize: '1rem',
                                borderTop: 'none',
                                borderLeft: 'none',
                                borderRight: 'none',
                                borderBottom: '1px solid #d1d5db',
                                borderRadius: '0',
                            }}
                            buttonStyle={{
                                background: 'none',
                                border: 'none',
                                borderBottom: '1px solid #d1d5db',
                                borderRadius: '0',
                            }}
                            dropdownStyle={{
                                width: 'max-content',
                            }}
                        />
                    </label>
                </div>

                <div className="space-y-2">
                    <label className="block">
                        <span className="text-sm">
                            <span className="text-red-500">*</span> Country
                        </span>
                        <div className="relative">
                            <select
                                required
                                className="mt-1 block w-full bg-white rounded-none border-b border-red-300 focus:outline-none focus:ring-2 focus:rounded focus:px-2 py-2 transition-colors"
                                value={formData.country}
                                onChange={(e) => setFormData({ ...formData, country: e.target.value })}
                            >
                                <option value="">Select Country</option>
                                <option value="Albania">Albania</option>
                                <option value="Algeria">Algeria</option>
                                <option value="Andorra">Andorra</option>
                                <option value="Angola">Angola</option>
                                <option value="Argentina">Argentina</option>
                                <option value="Austria">Austria</option>
                                <option value="Azerbaijan">Azerbaijan</option>
                                <option value="Bahrain">Bahrain</option>
                                <option value="Belarus">Belarus</option>
                                <option value="Belgium">Belgium</option>
                                <option value="Belize">Belize</option>
                                <option value="Benin">Benin</option>
                                <option value="Benin">Bolivia</option>
                                <option value="Bosnia and Herzegovina">Bosnia and Herzegovina</option>
                                <option value="Botswana">Botswana</option>
                                <option value="Brazil">Brazil</option>
                                <option value="Bulgaria">Bulgaria</option>
                                <option value="Burkina Faso">Burkina Faso</option>
                                <option value="Burundi">Burundi</option>
                                <option value="Cameroon">Cameroon</option>
                                <option value="Cape Verde">Cape Verde</option>
                                <option value="Central African Republic">Central African Republic</option>
                                <option value="Chad">Chad</option>
                                <option value="Chile">Chile</option>
                                <option value="China">China</option>
                                <option value="Colombia">Colombia</option>
                                <option value="Comoros">Comoros</option>
                                <option value="Congo">Congo</option>
                                <option value="Congo, The Democratic Republic of the">Congo, The Democratic Republic of the</option>
                                <option value="Costa Rica">Costa Rica</option>
                                <option value="Croatia">Croatia</option>
                                <option value="Cuba">Cuba</option>
                                <option value="Cyprus">Cyprus</option>
                                <option value="Czech Republic">Czech Republic</option>
                                <option value="Denmark">Denmark</option>
                                <option value="Djibouti">Djibouti</option>
                                <option value="Dominican Republic">Dominican Republic</option>
                                <option value="Ecuador">Ecuador</option>
                                <option value="Egypt">Egypt</option>
                                <option value="El Salvador">El Salvador</option>
                                <option value="Equatorial Guinea">Equatorial Guinea</option>
                                <option value="Eritrea">Eritrea</option>
                                <option value="Estonia">Estonia</option>
                                <option value="Eswatini">Eswatini</option>
                                <option value="Ethiopia">Ethiopia</option>
                                <option value="Faroe Islands">Faroe Islands</option>
                                <option value="Finland">Finland</option>
                                <option value="France">France</option>
                                <option value="French Guiana">French Guiana</option>
                                <option value="Gabon">Gabon</option>
                                <option value="Gambia">Gambia</option>
                                <option value="Georgia">Georgia</option>
                                <option value="Germany">Germany</option>
                                <option value="Ghana">Ghana</option>
                                <option value="Gibraltar">Gibraltar</option>
                                <option value="Greece">Greece</option>
                                <option value="Guadeloupe">Guadeloupe</option>
                                <option value="Guatemala">Guatemala</option>
                                <option value="Guernsey">Guernsey</option>
                                <option value="Guinea">Guinea</option>
                                <option value="Guinea-Bissau">Guinea-Bissau</option>
                                <option value="Guyana">Guyana</option>
                                <option value="Haiti">Haiti</option>
                                <option value="Honduras">Honduras</option>
                                <option value="Hungary">Hungary</option>
                                <option value="Iceland">Iceland</option>
                                <option value="India">India</option>
                                <option value="Ireland">Ireland</option>
                                <option value="Israel">Israel</option>
                                <option value="Italy">Italy</option>
                                <option value="Ivory Coast">Ivory Coast</option>
                                <option value="Jersey">Jersey</option>
                                <option value="Jordan">Jordan</option>
                                <option value="Kazakhstan">Kazakhstan</option>
                                <option value="Kenya">Kenya</option>
                                <option value="Kuwait">Kuwait</option>
                                <option value="Kyrgyzstan">Kyrgyzstan</option>
                                <option value="Latvia">Latvia</option>
                                <option value="Lesotho">Lesotho</option>
                                <option value="Liberia">Liberia</option>
                                <option value="Liechtenstein">Liechtenstein</option>
                                <option value="Lithuania">Lithuania</option>
                                <option value="Luxembourg">Luxembourg</option>
                                <option value="Macedonia, The Former Yugoslav Republic of">Macedonia, The Former Yugoslav Republic of</option>
                                <option value="Madagascar">Madagascar</option>
                                <option value="Malawi">Malawi</option>
                                <option value="Malaysia">Malaysia</option>
                                <option value="Maldives">Maldives</option>
                                <option value="Mali">Mali</option>
                                <option value="Malta">Malta</option>
                                <option value="Martinique">Martinique</option>
                                <option value="Mauritania">Mauritania</option>
                                <option value="Mauritius">Mauritius</option>
                                <option value="Mexico">Mexico</option>
                                <option value="Moldova, Republic of">Moldova, Republic of</option>
                                <option value="Monaco">Monaco</option>
                                <option value="Morocco">Morocco</option>
                                <option value="Mozambique">Mozambique</option>
                                <option value="Namibia">Namibia</option>
                                <option value="Netherlands">Netherlands</option>
                                <option value="Nicaragua">Nicaragua</option>
                                <option value="Niger">Niger</option>
                                <option value="Nigeria">Nigeria</option>
                                <option value="Norway">Norway</option>
                                <option value="Oman">Oman</option>
                                <option value="Panama">Panama</option>
                                <option value="Paraguay">Paraguay</option>
                                <option value="Peru">Peru</option>
                                <option value="Poland">Poland</option>
                                <option value="Portugal">Portugal</option>
                                <option value="Puerto Rico">Puerto Rico</option>
                                <option value="Qatar">Qatar</option>
                                <option value="Romania">Romania</option>
                                <option value="Russian Federation">Russian Federation</option>
                                <option value="Rwanda">Rwanda</option>
                                <option value="Saint-Barthélemy">Saint-Barthélemy</option>
                                <option value="Saint-Martin">Saint-Martin</option>
                                <option value="San Marino">San Marino</option>
                                <option value="Sao Tome and Principe">Sao Tome and Principe</option>
                                <option value="Saudi Arabia">Saudi Arabia</option>
                                <option value="Saudi Arabia">Saudi Arabia</option>
                                <option value="Serbia and Montenegro">Serbia and Montenegro</option>
                                <option value="Seychelles">Seychelles</option>
                                <option value="Sierra Leone">Sierra Leone</option>
                                <option value="Singapore">Singapore</option>
                                <option value="Slovakia">Slovakia</option>
                                <option value="Slovenia">Slovenia</option>
                                <option value="Somalia">Somalia</option>
                                <option value="South Africa">South Africa</option>
                                <option value="Spain">Spain</option>
                                <option value="Sri Lanka">Sri Lanka</option>
                                <option value="Suriname">Suriname</option>
                                <option value="Swaziland">Swaziland</option>
                                <option value="Sweden">Sweden</option>
                                <option value="Switzerland">Switzerland</option>
                                <option value="Tajikistan">Tajikistan</option>
                                <option value="Tanzania, United Republic of">Tanzania, United Republic of  </option>
                                <option value="Togo">Togo</option>
                                <option value="Tunisia">Tunisia</option>
                                <option value="Turkey">Turkey</option>
                                <option value="Turkmenistan">Turkmenistan</option>
                                <option value="Uganda">Uganda</option>
                                <option value="Ukraine">Ukraine  </option>
                                <option value="United Arab Emirates">United Arab Emirates</option>
                                <option value="United Kingdom">United Kingdom</option>
                                <option value="Uruguay">Uruguay</option>
                                <option value="Uzbekistan">Uzbekistan</option>
                                <option value="Venezuela">Venezuela</option>
                                <option value="Western Sahara">Western Sahara</option>
                                <option value="Yemen">Yemen</option>
                                <option value="Zambia">Zambia</option>
                                <option value="Zimbabwe">Zimbabwe</option>

                                {/* Add country options */}
                            </select>
                            <ChevronDown className="absolute right-2 top-1/2 transform -translate-y-1/2 w-4 h-4 pointer-events-none" />
                        </div>
                    </label>
                </div>
                <div className="space-y-2">
                    <label className="block">
                        <span className="text-sm">
                            <span className="text-red-500">*</span> City
                        </span>
                        <input
                            type="text"
                            required
                            className="mt-1 block w-full rounded-none border-b border-red-300 focus:outline-none focus:ring-2 focus:rounded focus:px-2 py-2 transition-colors"
                            placeholder="City"
                            value={formData.city}
                            onChange={(e) => setFormData({ ...formData, city: e.target.value })}
                        />
                    </label>
                </div>

                <div className="space-y-2">
                    <label className="block">
                        <span className="text-sm">Street</span>
                        <input
                            type="text"
                            className="mt-1 block w-full rounded-none border-b border-red-300 focus:outline-none focus:ring-2 focus:rounded focus:px-2 py-2 transition-colors"
                            placeholder="Street"
                            value={formData.street}
                            onChange={(e) => setFormData({ ...formData, street: e.target.value })}
                        />
                    </label>
                </div>
                <div className="space-y-2">
                    <label className="block">
                        <span className="text-sm">Zip Code</span>
                        <input
                            type="text"
                            className="mt-1 block w-full rounded-none border-b border-red-300 focus:outline-none focus:ring-2 focus:rounded focus:px-2 py-2 transition-colors"
                            placeholder="Zip Code"
                            value={formData.zipCode}
                            onChange={(e) => setFormData({ ...formData, zipCode: e.target.value })}
                        />
                    </label>
                </div>

                <div className="space-y-2">
                    <label className="block">
                        <span className="text-sm">Company</span>
                        <input
                            type="text"
                            className="mt-1 block w-full rounded-none border-b border-red-300 focus:outline-none focus:ring-2 focus:rounded focus:px-2 py-2 transition-colors"
                            placeholder="Company"
                            value={formData.company}
                            onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                        />
                    </label>
                </div>
                <div className="space-y-2">
                    <label className="block">
                        <span className="text-sm">
                            <span className="text-red-500">*</span> I am
                        </span>
                        <div className="relative">
                            <select
                                required
                                className="mt-1 block w-full bg-white rounded-none border-b border-red-300 focus:outline-none focus:ring-2 focus:rounded focus:px-2 py-2 transition-colors"
                                value={formData.iAm}
                                onChange={(e) => setFormData({ ...formData, iAm: e.target.value })}
                            >
                                <option value="Homeowner">Homeowner</option>
                                <option value="Developer/Contractor">Developer/Contractor</option>
                                <option value="Kitchen and bath">Kitchen and bath</option>
                                <option value="Architect/Designer">Architect/Designer</option>
                                <option value="Fabricator">Fabricator</option>
                                <option value="Distributor">Distributor</option>
                                <option value="Other">Other</option>
                            </select>
                            <ChevronDown className="absolute right-2 top-1/2 transform -translate-y-1/2 w-4 h-4 pointer-events-none" />
                        </div>
                    </label>
                </div>
            </div>

            <div className="space-y-2">
                <label className="block">
                    <span className="text-sm">
                        <span className="text-red-500">*</span> Subject
                    </span>
                    <div className="relative">
                        <select
                            required
                            className="mt-1 block w-full bg-white rounded-none border-b border-red-300 focus:outline-none focus:ring-2 focus:rounded focus:px-2 py-2 transition-colors"
                            value={formData.subject}
                            onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                        >
                            <option value="Care & Cleaning Guidance">Care & Cleaning Guidance</option>
                            <option value="Connect with Sales Rep">Connect with Sales Rep</option>
                            <option value="General Information">General Information</option>
                            <option value="Other">Other</option>


                        </select>
                        <ChevronDown className="absolute right-2 top-1/2 transform -translate-y-1/2 w-4 h-4 pointer-events-none" />
                    </div>
                </label>
            </div>

            <div className="space-y-2">
                <label className="block">
                    <span className="text-sm">Interested In</span>
                    <div className="relative">
                        <select
                            className="mt-1 block w-full bg-white rounded-none border-b border-red-300 focus:outline-none focus:ring-2 focus:rounded focus:px-2 py-2 transition-colors"
                            value={formData.interestedIn}
                            onChange={(e) => setFormData({ ...formData, interestedIn: e.target.value })}
                        >
                            <option value="Quartz">Quartz</option>
                            <option value="Mineral">Mineral</option>
                            <option value="Porcelain">Porcelain</option>
                            <option value="All surfaces">All surfaces</option>
                        </select>
                        <ChevronDown className="absolute right-2 top-1/2 transform -translate-y-1/2 w-4 h-4 pointer-events-none" />
                    </div>
                </label>
            </div>

            <div className="space-y-2">
                <label className="block">
                    <span className="text-sm">
                        <span className="text-red-500">*</span> Message
                    </span>
                    <textarea
                        required
                        rows={4}
                        className="mt-1 block w-full rounded-none border-b border-red-300 focus:outline-none focus:ring-2 focus:rounded focus:px-2 py-2 transition-colors"
                        placeholder="Message"
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    />
                </label>
            </div>
            <div className="flex items-start gap-2">
                <input
                    type="checkbox"
                    id="newsletter"
                    className="mt-1 rounded border-gray-300 text-orange-500 focus:ring-orange-500"
                    checked={formData.newsletter}
                    onChange={(e) => setFormData({ ...formData, newsletter: e.target.checked })}
                />
                <label htmlFor="newsletter" className="text-sm">
                    Yes, sign me up to receive email communications from Lucerno Ltd. about products, news, and events. I understand I can unsubscribe at any time.
                </label>
            </div>

            <div className="text-center text-sm">
                By providing your details and clicking Submit, you acknowledge and agree to our website{' '}
                <a href="/privacy-policy" className="text-orange-500 hover:underline">
                    Privacy Policy
                </a>{' '}
                and{' '}
                <a href="/terms" className="text-orange-500 hover:underline">
                    Terms of Use
                </a>
                .
            </div>

            <div className="text-center">
                <button
                    type="submit"
                    className="px-12 py-3 bg-orange-500 text-white rounded-full hover:bg-orange-600 transition-colors"
                >
                    Submit
                </button>
            </div>
        </form>
    )
}