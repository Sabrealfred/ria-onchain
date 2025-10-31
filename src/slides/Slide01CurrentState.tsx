import { Users, DollarSign, MapPin } from 'lucide-react';
import type { ContentSlide } from '../types/slides';

export const Slide01CurrentState: ContentSlide = {
  type: 'content',
  title: 'II. CURRENT STATE',
  subtitle: 'Sector Analysts, LLC — Traditional RIA Profile & Financials',
  content: (
    <div className="h-full flex flex-col p-8 pt-32">
      <div className="grid grid-cols-2 gap-8 mb-8">
        <div className="bg-slate-50 border-2 border-slate-200 p-6">
          <div className="flex items-center gap-3 mb-4">
            <div className="bg-slate-900 text-white p-3 rounded-lg">
              <DollarSign size={24} />
            </div>
            <div>
              <div className="text-3xl font-bold text-slate-900">$2.5M</div>
              <div className="text-sm text-slate-600">Annual Revenue (2025)</div>
            </div>
          </div>
          <div className="space-y-2 text-sm">
            <div className="flex justify-between">
              <span className="text-slate-600">YTD Revenue:</span>
              <span className="font-semibold">$2.13M</span>
            </div>
            <div className="flex justify-between">
              <span className="text-slate-600">Gross Margin:</span>
              <span className="font-semibold text-green-600">89.6%</span>
            </div>
            <div className="flex justify-between">
              <span className="text-slate-600">Valuation (1-1.5x):</span>
              <span className="font-semibold">$2.5-3.75M</span>
            </div>
          </div>
        </div>

        <div className="bg-blue-50 border-2 border-blue-200 p-6">
          <div className="flex items-center gap-3 mb-4">
            <div className="bg-blue-600 text-white p-3 rounded-lg">
              <Users size={24} />
            </div>
            <div>
              <div className="text-3xl font-bold text-slate-900">RIA</div>
              <div className="text-sm text-slate-600">Registered Investment Advisor</div>
            </div>
          </div>
          <div className="space-y-2 text-sm">
            <div className="flex justify-between">
              <span className="text-slate-600">CRD Number:</span>
              <span className="font-semibold">#169789</span>
            </div>
            <div className="flex justify-between">
              <span className="text-slate-600">Founded:</span>
              <span className="font-semibold">2013</span>
            </div>
            <div className="flex justify-between">
              <span className="text-slate-600">RIA Since:</span>
              <span className="font-semibold">2015</span>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-white border-2 border-slate-300 p-6 mb-8">
        <div className="flex items-center gap-3 mb-4">
          <MapPin className="text-slate-700" size={24} />
          <h3 className="text-xl font-semibold">Location & Operations</h3>
        </div>
        <div className="grid grid-cols-2 gap-4 text-sm">
          <div>
            <div className="text-slate-600">Headquarters:</div>
            <div className="font-semibold">Allentown, PA</div>
          </div>
          <div>
            <div className="text-slate-600">Business Model:</div>
            <div className="font-semibold">Traditional Fee-Based Advisory</div>
          </div>
        </div>
      </div>

      <div className="bg-gradient-to-r from-yellow-50 to-orange-50 border-2 border-yellow-300 p-6">
        <h3 className="text-xl font-semibold mb-4 text-slate-900">⚠️ Traditional RIA Limitations</h3>
        <div className="grid grid-cols-2 gap-4 text-sm">
          <div className="space-y-2">
            <div className="flex items-start gap-2">
              <div className="text-red-500 font-bold">•</div>
              <div>No crypto/blockchain exposure</div>
            </div>
            <div className="flex items-start gap-2">
              <div className="text-red-500 font-bold">•</div>
              <div>Manual processes & legacy systems</div>
            </div>
            <div className="flex items-start gap-2">
              <div className="text-red-500 font-bold">•</div>
              <div>Limited scalability at 1-1.5x revenue multiple</div>
            </div>
          </div>
          <div className="space-y-2">
            <div className="flex items-start gap-2">
              <div className="text-red-500 font-bold">•</div>
              <div>Traditional asset classes only</div>
            </div>
            <div className="flex items-start gap-2">
              <div className="text-red-500 font-bold">•</div>
              <div>No tokenization or DeFi integration</div>
            </div>
            <div className="flex items-start gap-2">
              <div className="text-red-500 font-bold">•</div>
              <div>Missing fintech growth opportunities</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
};
