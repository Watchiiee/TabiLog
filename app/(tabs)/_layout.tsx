import { Tabs } from "expo-router";
import { List, Map, Plus, User, UtensilsCrossed } from "lucide-react-native";
import { View } from "react-native";

export default function TabLayout() {
  return (
    <Tabs
      screenOptions={{
        headerShown: false, // 상단 헤더 숨김
        tabBarShowLabel: true, // 탭 라벨 보이기
        tabBarActiveTintColor: "#FF6B6B", // 활성화 색상 (코랄 핑크)
        tabBarInactiveTintColor: "#A0A0A0", // 비활성화 색상 (회색)
        tabBarStyle: {
          height: 90, // 탭바 높이 살짝 키움
          paddingBottom: 30, // 아이폰 홈 바 영역 확보
          paddingTop: 10,
          backgroundColor: "#FFFFFF",
          borderTopWidth: 1,
          borderTopColor: "#F0F0F0",
        },
      }}
    >
      {/* 1. 홈 (지도) */}
      <Tabs.Screen
        name="index"
        options={{
          title: "홈",
          tabBarIcon: ({ color }) => <Map size={24} color={color} />,
        }}
      />

      {/* 2. 타임라인 */}
      <Tabs.Screen
        name="timeline"
        options={{
          title: "타임라인",
          tabBarIcon: ({ color }) => <List size={24} color={color} />,
        }}
      />

      {/* 3. 기록하기 (가운데 큰 버튼) */}
      <Tabs.Screen
        name="record"
        options={{
          title: "", // 라벨 없음
          tabBarIcon: () => (
            <View className="bg-coral-500 w-14 h-14 rounded-full items-center justify-center -mt-4 shadow-lg bg-[#FF6B6B]">
              <Plus size={30} color="white" strokeWidth={3} />
            </View>
          ),
        }}
      />

      {/* 4. 아카이브 */}
      <Tabs.Screen
        name="archive"
        options={{
          title: "아카이브",
          tabBarIcon: ({ color }) => (
            <UtensilsCrossed size={24} color={color} />
          ),
        }}
      />

      {/* 5. 마이페이지 */}
      <Tabs.Screen
        name="mypage"
        options={{
          title: "MY",
          tabBarIcon: ({ color }) => <User size={24} color={color} />,
        }}
      />
    </Tabs>
  );
}
