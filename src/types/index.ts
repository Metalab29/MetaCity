export interface Asset {
  id: string;
  name: string;
  platform: string;
  price: number;
  image: string;
  popularity: number;
  description: string;
}

export interface Transaction {
  id: string;
  type: 'buy' | 'sell' | 'transfer';
  asset: string;
  amount: number;
  price: number;
  platform: string;
  timestamp: Date;
  status: 'completed' | 'pending' | 'failed';
}

export interface Badge {
  id: string;
  name: string;
  icon: string;
  description: string;
  dateEarned: Date;
}

export interface ConnectedPlatform {
  id: string;
  name: string;
  status: 'connected' | 'disconnected';
  lastSync: Date;
}

export interface NotificationSetting {
  id: string;
  type: string;
  enabled: boolean;
  channel: 'email' | 'push' | 'both';
}