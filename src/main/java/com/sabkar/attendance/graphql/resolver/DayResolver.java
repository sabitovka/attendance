package com.sabkar.attendance.graphql.resolver;

import com.coxautodev.graphql.tools.GraphQLResolver;
import com.sabkar.attendance.entity.transfer.DayDto;
import lombok.AllArgsConstructor;
import org.springframework.stereotype.Component;

@Component
@AllArgsConstructor
public class DayResolver implements GraphQLResolver<DayDto> {
}
